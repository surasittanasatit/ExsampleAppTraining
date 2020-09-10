const STATE_INIT = {
  configuri: 'http://sitdev.dyndns.org:12009/api',
  //configuri : 'https://m-voting.coj.go.th/api',
};

export const ConfigDBReducer = (state = STATE_INIT, action) => {
  if (action.type == "CONFIG_URI") {
    return {
      ...state,
      configuri: action.payload
    };
  }
  return state;
};