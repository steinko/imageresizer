import {role} from './Role'
import * as aws from "@pulumi/aws"
import * as pulumi from  "@pulumi/pulumi"

export const lamda = new aws.lambda.Function("aws-lamda-function", {
    code: new pulumi.asset.FileArchive("../app/build/libs/imageresizer-1.0.0-all.jar"),   
    runtime: aws.lambda.Java8Runtime,
    handler: "org.steinko.imageresizer.LambdaFunctionHandler::handleRequest",
    role: role.arn,
    name: "lamda",
    memorySize: 300,
    timeout: 100
},
   );