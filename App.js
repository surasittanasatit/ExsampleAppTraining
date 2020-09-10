import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider as StoreProvider } from "react-redux";

import MyCombineReducers from "./app/Reducers";
import IndexApp from "./app/Screen";

class App extends React.Component {
  render() {
    let reducers = combineReducers(MyCombineReducers);
    let store = createStore(reducers);
    return (
      <StoreProvider store={store}>
        <IndexApp />
      </StoreProvider>
    );
  }
}

export default App;