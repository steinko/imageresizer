import * as aws from "@pulumi/aws";
import {lamda} from "./Lamda"

export const lamdaUrl = new aws.lambda.FunctionUrl("lamdadUrl", {
    functionName: lamda.arn,
    authorizationType: "NONE",
});
