'use strict';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const aws_region = 'us-east-1';

const pinpoint = new AWS.Pinpoint({ region: aws_region });

const ApplicationId = process.env.PINPOINT_APP_ID;
const brandName = process.env.BRAND_NAME;
const validityPeriod = process.env.VALIDITY_PERIOD;
const origNumber = process.env.ORIGINATION_NUMBER;
const messageChannel = process.env.MESSAGE_CHANNEL;

const credentials = new AWS.SharedIniFileCredentials({
  profile: 'default',
});
AWS.config.credentials = credentials;
AWS.config.update({ region: aws_region });

/**
 * Sends an OTP to a given phone number via AWS Pinpoint.
 * @param {string} phoneNumber - The phone number to send the OTP to.
 * @returns {referenceId: string, phoneNumber: string} - An object containing the referenceId.
 */
const sendOtp = async (phoneNumber) => {
  const referenceId = uuidv4();

  // Specify the parameters to pass to the API.
  const params = {
    ApplicationId: ApplicationId,
    SendOtpMessageRequestParameters: {
      BrandName: brandName,
      Channel: messageChannel,
      DestinationIdentity: phoneNumber,
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

/**
 * Verifies an OTP received by the end user.
 * @param {string} referenceId - The unique reference ID generated when the OTP was sent.
 * @param {string} phoneNumber - The phone number the OTP was sent to.
 * @param {string} otpCode - The OTP code received from the user.
 * @returns {success: boolean, message: string} - The verification result.
 */
const verifyOtp = async (referenceId, phoneNumber, otpCode) => {
  const params = {
    ApplicationId: ApplicationId,
    VerifyOtpMessageRequestParameters: {
      DestinationIdentity: phoneNumber,
      Otp: otpCode,
      ReferenceId: referenceId,
    },
  };

  try {
    const response = await pinpoint.verifyOtpMessage(params).promise();
    console.log(`OTP verification result: ${JSON.stringify(response)}`);
    return response.VerificationResponse.Valid
      ? { success: true, message: 'OTP verified successfully' }
      : { success: false, message: 'Invalid OTP' };
  } catch (err) {
    console.log(`Error verifying OTP: ${err.message}`);
    return { success: false, message: err.message };
  }
};

export { sendOtp, verifyOtp };
