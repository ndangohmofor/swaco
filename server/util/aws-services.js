import { PinpointClient } from '@aws-sdk/client-pinpoint';

const aws_region = process.env.AWS_REGION || 'us-east-1';
export const pinPoint = new PinpointClient({ region: aws_region });
