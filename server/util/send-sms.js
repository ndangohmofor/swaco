'use strict';
import AWS from 'aws-sdk';

const aws_region = 'us-east-1';
const origNumber = process.env.ORIGINATION_NUMBER;
const languageCode = 'en-US';
const voiceId = 'Ruth';

const smsMessage =
  'This is a test message sent from <emphasis>Amazon Pinpoint</emphasis> ' +
  'Reply STOP to opt out.';

const messageType = 'TRANSACTIONAL';

const configurationSet = 'ConfigSet';
const callerId = process.env.CALLER_ID;

const credentials = new AWS.SharedIniFileCredentials({
  profile: 'default',
});
AWS.config.credentials = credentials;
AWS.config.update({ region: aws_region });

const pinpoint = new AWS.Pinpoint();

// Specify the parameters to pass to the API.
const params = {
  ApplicationId: process.env.PINPOINT_APP_ID,
  MessageRequest: {
    Addresses: {
      [destinationNumber]: {
        channelType: 'SMS',
      },
    },
    MessageConfiguration: {
      SMSMessage: {
        Body: smsMessage,
        MessageType: messageType,
        OriginationNumber: origNumber,
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

export default sendVoiceMessage;
