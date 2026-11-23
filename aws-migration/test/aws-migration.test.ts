import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AwsMigrationStack } from '../lib/aws-migration-stack';

describe('AWS migration infrastructure', () => {
  const app = new cdk.App();
  const stack = new AwsMigrationStack(app, 'TestMigrationStack');
  const template = Template.fromStack(stack);

  test('creates a VPC and a MySQL database', () => {
    template.resourceCountIs('AWS::EC2::VPC', 1);
    template.resourceCountIs('AWS::RDS::DBInstance', 1);
  });

  test('does not expose SSH to the internet', () => {
    const securityGroups = template.findResources('AWS::EC2::SecurityGroup');
    for (const group of Object.values(securityGroups) as any[]) {
      const ingress = group.Properties?.SecurityGroupIngress || [];
      for (const rule of ingress) {
        expect(rule).not.toEqual(expect.objectContaining({
          CidrIp: '0.0.0.0/0',
          FromPort: 22,
          ToPort: 22,
        }));
      }
    }
  });

  test('allows MySQL only from a security group', () => {
    const securityGroups = template.findResources('AWS::EC2::SecurityGroup');
    const ingressRules = Object.values(securityGroups).flatMap((group: any) => group.Properties?.SecurityGroupIngress || []);
    expect(ingressRules).toEqual(expect.arrayContaining([
      expect.objectContaining({
        IpProtocol: 'tcp',
        FromPort: 3306,
        ToPort: 3306,
        SourceSecurityGroupId: expect.anything(),
      }),
    ]));
  });
});
