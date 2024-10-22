'use strict';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const aws_region = 'us-east-1';

const pinpoint = new AWS.Pinpoint({ region: aws_region });

const messageType = 'TRANSACTIONAL';
const registeredKeyword = process.env.REGISTERED_KEYWORD;
const ApplicationId = process.env.PINPOINT_APP_ID;
const brandName = process.env.BRAND_NAME;
const validityPeriod = process.env.VALIDITY_PERIOD;
const origNumber = process.env.ORIGINATION_NUMBER;
const messageChannel = process.env.MESSAGE_CHANNEL;
const languageCode = 'en-US';

const credentials = new AWS.SharedIniFileCredentials({
  profile: 'default',
});
AWS.config.credentials = credentials;
AWS.config.update({ region: aws_region });

const sendOtp = async (phoneNumber) => {
  const referenceId = uuidv4();

  // Specify the parameters to pass to the API.
  const params = {
    ApplicationId: ApplicationId,
    SendOtpMessageRequestParameters: {
      BrandName: brandName,
      Channel: messageChannel,
      DestinationNumber: phoneNumber,
      OriginationIdentity: origNumber,
      ReferenceId: referenceId,
      ValidityPeriod: validityPeriod,
    },
  };

  try {
    const response = await pinpoint.sendOtpMessages(params).promise();
    console.log(`OTP sent successfully: ${JSON.stringify(response)}`);
    return { referenceId, phoneNumber };
  } catch (err) {
    console.log(`Error sending OTP: ${err.message}`);
    throw err;
  }
};
