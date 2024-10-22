'use strict';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const aws_region = 'us-east-1';
const origNumber = process.env.ORIGINATION_NUMBER;
const languageCode = 'en-US';

const pinpoint = new AWS.Pinpoint({ region: aws_region });

const messageType = 'TRANSACTIONAL';
const registeredKeyword = process.env.REGISTERED_KEYWORD;
const ApplicationId = process.env.PINPOINT_APP_ID;
const brandName = process.env.BRAND_NAME;

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
      OriginationIdentity: originationNumber,
      ReferenceId: referenceId,
      ValidityPeriod: validityPeriod,
    },
  };
};

pinpoint.sendMessages(params, function (err, data) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(
      'Message sent! ' +
        data['MessageResponse']['Result'][destinationNumber]['StatusMessage'],
    );
  }
});

export default sendMessages;
