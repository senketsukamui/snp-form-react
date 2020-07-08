import { createStore } from "redux";
import reducers from "store/reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("formFields", JSON.stringify(store.getState().form));
});

export default store;
