'use strict';
import { SendOTPMessageCommand } from '@aws-sdk/client-pinpoint';
import { pinpoint } from '../lib/aws-services.js';
import { v4 as uuidv4 } from 'uuid';

const aws_region = process.env.AWS_REGION || 'us-east-1';
const ApplicationId = process.env.PINPOINT_APP_ID;
const brandName = process.env.BRAND_NAME || 'Swaco';
const validityPeriod = process.env.VALIDITY_PERIOD || '5';
const origNumber = process.env.ORIGINATION_NUMBER;
const messageChannel = process.env.MESSAGE_CHANNEL || 'SMS';

// const credentials = new AWS.SharedIniFileCredentials({
//   profile: 'default',
// });
// AWS.config.credentials = credentials;
// const pinpoint = new AWS.Pinpoint({ region: aws_region });

/**
 * Sends an OTP to a given phone number via AWS Pinpoint.
 * @param {string} phoneNumber - The phone number to send the OTP to.
 * @returns {Promise<{referenceId: string, phoneNumber: string}>} - An object containing the referenceId and phoneNumber.
 */
const sendOtp = async (phoneNumber) => {
  const referenceId = uuidv4();

  // Specify the parameters to pass to the API.
  const params = {
    ApplicationId: ApplicationId,
    SendOTPMessageRequestParameters: {
      BrandName: brandName,
      Channel: messageChannel,
      DestinationIdentity: phoneNumber,
      OriginationIdentity: origNumber,
      ReferenceId: referenceId,
      ValidityPeriod: validityPeriod,
    },
  };

  try {
    const response = await pinpoint.send(new SendOTPMessageCommand(params));
    console.log(`OTP sent successfully: ${JSON.stringify(response)}`);
    return { referenceId, phoneNumber };
  } catch (err) {
    console.error(`Error sending OTP: ${err.message}`);
    throw err;
  }
};

/**
 * Verifies an OTP received by the end user.
 * @param {string} referenceId - The unique reference ID generated when the OTP was sent.
 * @param {string} phoneNumber - The phone number the OTP was sent to.
 * @param {string} otpCode - The OTP code received from the user.
 * @returns {Promise<{success: boolean, message: string}>} - The verification results.
 */
const verifyOtp = async (referenceId, phoneNumber, otpCode) => {
  const params = {
    ApplicationId: ApplicationId,
    VerifyOTPMessageRequestParameters: {
      DestinationIdentity: phoneNumber,
      Otp: otpCode,
      ReferenceId: referenceId,
    },
  };

  try {
    const response = await pinpoint.verifyOTPMessage(params).promise();
    console.log(`OTP verification result: ${JSON.stringify(response)}`);
    return response.VerificationResponse.Valid
      ? { success: true, message: 'OTP verified successfully' }
      : { success: false, message: 'Invalid OTP' };
  } catch (err) {
    console.error(`Error verifying OTP: ${err.message}`);
    return { success: false, message: err.message };
  }
};

export { sendOtp, verifyOtp };
