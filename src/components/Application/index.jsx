import React from "react";
import "./index.css";
import Main from "components/Main";
import { Provider } from "react-redux";
import store from "store/store";
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
