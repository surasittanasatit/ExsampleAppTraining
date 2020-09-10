const STATE_INIT = {
  configuri: 'http://sitdev.dyndns.org:12009/api',
  //configuri : 'https://m-voting.coj.go.th/api',
  //configuri : 'http://192.168.43.14:3001/api',
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