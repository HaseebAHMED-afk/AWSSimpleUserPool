#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CognitoUserPoolStack } from '../lib/cognito-user-pool-stack';

const app = new cdk.App();
new CognitoUserPoolStack(app, 'CognitoUserPoolStack');
