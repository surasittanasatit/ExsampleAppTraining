export const modelAction = {
    getActionPhoneNumber: phonenumber => {
        return {
            type: "PHONE_NUMBER",
            payload: phonenumber,
        };
    },
    getActionToken: token => {
        return {
            type: "TOKEN",
            payload: token,
        };
    },
};