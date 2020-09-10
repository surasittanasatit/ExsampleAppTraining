export const configAction = {
    getActionConfigUri: configuri => {
      return {
        type: "CONFIG_URI",
        payload: configuri,
      };
    },
  };