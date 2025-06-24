# 🏥 AWS CDK: Infrastructure Modernization for Healthcare Web Application

This project modernizes a legacy AWS environment for a healthcare technology company using the **AWS Cloud Development Kit (CDK)** with **TypeScript**. The infrastructure was originally built manually through the AWS Console and has been re-architected to follow AWS best practices in security, network isolation, and Infrastructure as Code (IaC).

---

## ⚙️ Overview

The new infrastructure includes:

- A Virtual Private Cloud (VPC) with public and private subnets across two Availability Zones
- An EC2 instance in the public subnet, accessible via AWS Systems Manager (SSM)
- A MySQL RDS instance in the private subnet, isolated from public access
- Security groups configured for least-privilege access between EC2 and RDS
- IAM roles and managed policies for EC2 instance management
- Reproducible deployment and teardown using `cdk deploy` and `cdk destroy`

---

## 🎯 Goals

- Replace manual AWS Console setup with version-controlled Infrastructure as Code
- Improve network segmentation and security posture
- Enable reproducible and consistent environment creation
- Lay the groundwork for future CI/CD and testing automation

---

## ✅ Best Practices Applied

- Separation of public and private subnets
- Secure access via SSM instead of SSH
- No direct internet access to the RDS instance
- IAM roles with only required permissions
- Resources tagged and organized by purpose and environment

---

## 📁 Tech Stack

- **AWS CDK** (TypeScript)
- **Amazon EC2**
- **Amazon RDS (MySQL)**
- **Amazon VPC**
- **AWS IAM**
- **AWS Systems Manager**

---

## 🧪 Testing & Validation

The stack was tested for:

- Successful EC2-to-RDS MySQL connection
- Proper security group enforcement
- Network isolation between public and private subnets
- Successful `cdk deploy` and `cdk destroy` cycles

---

## 🧾 Notes

This project is intended as a foundational infrastructure refactor for future application modernization. Cost-optimized resources (e.g., t3.micro instances) were selected for demonstration and testing purposes.

---



[Medium Blog](https://medium.com/@yourusername) | 

