import * as aws from "@pulumi/aws";

export const target = new aws.s3.Bucket("target", {bucket:'image-resize-target-steinko'});

