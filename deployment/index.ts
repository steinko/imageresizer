import {source} from "./sourceBucket"
import {bucketObject} from "./BucketObject"
import {target} from "./targetBucket"
import {role} from "./Role"
import {lamda} from "./Lamda"
import {lamdaUrl} from "./LamdaUrl"


lamda
lamdaUrl
source
bucketObject
target
role
export const bucketArn = source.arn
export const bucketObjectKey = bucketObject.key;