'use strict';
import AWS from 'aws-sdk';

const aws_region = 'us-east-1';
const origNumber = process.env.ORIGINATION_NUMBER;
const languageCode = 'en-US';
const voiceId = 'Ruth';

const smsMessage =
  'This is a test message sent from <emphasis>Amazon Pinpoint</emphasis> ' +
  'Reply STOP to opt out.';

const configurationSet = 'ConfigSet';
const callerId = process.env.CALLER_ID;

const credentials = new AWS.SharedIniFileCredentials({
  profile: 'default',
});
AWS.config.credentials = credentials;
AWS.config.update({ region: aws_region });

const pinpointsmsvoice = new AWS.PinpointSMSVoice();

function sendVoiceMessage(destinationNumber) {
  const params = {
    CallerId: callerId,
    ConfigurationSetName: configurationSet,
    Content: {
      SSMLMessage: {
        LanguageCode: languageCode,
        Text: ssmlMessage,
        VoiceId: voiceId,
      },
    },
    DestinationPhoneNumber: destinationNumber,
    OriginationPhoneNumber: origNumber,
  };

  pinpointsmsvoice.sendVoiceMessage(params, function (err, data) {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Message sent! Message ID: ' + data['MessageId']);
    }
  });
}

export default sendVoiceMessage;
