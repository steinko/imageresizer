import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import {source} from "./sourceBucket"

export const bucketObject = new aws.s3.BucketObject("bucketObject", {
    key: "image_m",
    bucket: source.id,
    source: new pulumi.asset.FileAsset("m.jpeg"),
});