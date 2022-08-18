import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export const lamdaPolicy = pulumi.output(aws.iam.getPolicy({
    name: "AWSLambdaBasicExecutionRole",
}));

export const s3Policy = pulumi.output(aws.iam.getPolicy({
    name: "AmazonS3FullAccess",
}));
