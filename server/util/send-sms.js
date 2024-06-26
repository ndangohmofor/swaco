'use strict';

const aws_region = 'us-east-1';
const origNumber = process.env.ORIGINATION_NUMBER;
const languageCode = 'en-US';

const voidId = 'Ruth';

const ssmlMessage =
  '<speak>' +
  'This is a test message sent from <emphasis>Amazon Pinpoint</emphasis> ' +
  "using the <break strength='weak'/>AWS SDK for JavaScript in Node.js. " +
  "<amazon:effect phonation='soft'>Thank you for listening." +
  '</amazon:effect>' +
  '</speak>';

const configurationSet = 'ConfigSet';
