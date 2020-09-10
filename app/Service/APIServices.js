import axios from 'axios'
axios.defaults.timeout = 120000;

const GetOTPSMS = (hostUrl, phone_number, handleGetOTPSMS) => {
    const data = {
        "phone_number": phone_number
    };
    axios({
        method: 'POST',
        url: hostUrl + '/getOTPSMS',
        responseType: 'json',
        data: data
    })
        .then(function (response) {
            handleGetOTPSMS(response.data);
        })
        .catch(function (error) {
            console.log('Error handleGetOTPSMS :', (error));
            handleGetOTPSMS(error.response);
        });
}

const GetVerifyOTP = (hostUrl, phone_number, otp, handleGetVerifyOTP) => {
    const data = {
        "phone_number": phone_number,
        "otp": otp
    };
    axios({
        method: 'POST',
        url: hostUrl + '/getVerifyOTP',
        responseType: 'json',
        data: data
    })
        .then(function (response) {
            handleGetVerifyOTP(response.data);
        })
        .catch(function (error) {
            //console.log('Error handleGetVerifyOTP :', error);
            handleGetVerifyOTP(error.response);
        });
}

export default {
    GetOTPSMS,
    GetVerifyOTP,
};