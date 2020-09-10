const STATE_INIT = {
    phonenumber: '',
    token: ''
};

export const ModelReducer = (state = STATE_INIT, action) => {
    if (action.type == "PHONE_NUMBER") {
        return {
            ...state,
            phonenumber: action.payload
        };
    } else if (action.type == "TOKEN") {
        return {
            ...state,
            token: action.payload
        };
    }
    return state;
};