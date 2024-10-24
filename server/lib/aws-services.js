import { PinpointClient } from '@aws-sdk/client-pinpoint';
import { fromIni } from '@aws-sdk/credential-providers';

const aws_region = process.env.AWS_REGION || 'us-east-1';

export const credentials = fromIni({
  profile: 'default',
});
export const pinpoint = new PinpointClient({ region: aws_region, credentials });
