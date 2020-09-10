const STATE_INIT = {
    phonenumber: '',
};

export const ModelReducer = (state = STATE_INIT, action) => {
    if (action.type == "PHONE_NUMBER") {
        return {
            ...state,
            phonenumber: action.payload
        };
    }
    return state;
};