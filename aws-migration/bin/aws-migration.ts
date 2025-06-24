#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsMigrationStack } from '../lib/aws-migration-stack';

const app = new cdk.App();
new AwsMigrationStack(app, 'AwsMigrationStack', {

  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: 'us-east-1',

  },

});