import * as aws from "@pulumi/aws";

export const source = new aws.s3.Bucket("source", {bucket:'image-resize-source-skor'});
