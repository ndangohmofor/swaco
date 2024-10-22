'use strict';
import AWS from 'aws-sdk';

const aws_region = 'us-east-1';
const origNumber = process.env.ORIGINATION_NUMBER;
const languageCode = 'en-US';

const smsMessage =
  'This is a test message sent from <emphasis>Amazon Pinpoint</emphasis> ' +
  'Reply STOP to opt out.';

const messageType = 'TRANSACTIONAL';
const registeredKeyword = process.env.REGISTERED_KEYWORD;
const ApplicationId = process.env.PINPOINT_APP_ID;

const credentials = new AWS.SharedIniFileCredentials({
  profile: 'default',
});
AWS.config.credentials = credentials;
AWS.config.update({ region: aws_region });

const pinpoint = new AWS.Pinpoint();

// Specify the parameters to pass to the API.
const params = {
  ApplicationId: ApplicationId,
  MessageRequest: {
    Addresses: {
      [destinationNumber]: {
        channelType: 'SMS',
      },
    },
    MessageConfiguration: {
      SMSMessage: {
        Body: smsMessage,
        keyword: registeredKeyword,
        MessageType: messageType,
        OriginationNumber: origNumber,
        LanguageCode: languageCode,
      },
    },
  },
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
