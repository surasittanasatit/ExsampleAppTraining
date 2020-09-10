import axios from 'axios'
axios.defaults.timeout = 120000;

const GetEnroll = (hostUrl, username, password, handleGetEnroll) => {
    const data =
    {
        "username": username,
        "password": password
    };
    axios({
        method: 'POST',
        url: hostUrl + '/enroll',
        responseType: 'json',
        data: data
    })
        .then(function (response) {
            handleGetEnroll(response.data);
        })
        .catch(function (error) {
            console.log('Error handleGetEnroll :', (error));
            handleGetEnroll(error.response);
        });
}

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
            console.log('Error handleGetVerifyOTP :', error);
            handleGetVerifyOTP(error.response);
        });
}

export default {
    GetOTPSMS,
    GetVerifyOTP,
    GetEnroll
};