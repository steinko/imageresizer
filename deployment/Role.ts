import * as aws from "@pulumi/aws";
import {lamdaPolicy} from "./Policy"
import {s3Policy} from "./Policy"

export const role = new aws.iam.Role("role", {assumeRolePolicy: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}`,
managedPolicyArns: [ 
	                 lamdaPolicy.arn,
                     s3Policy.arn,
                   ]
});