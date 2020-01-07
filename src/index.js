import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./taskredux/users/reducer";
import UsersContainer from "./containers/UsersContainer";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <UsersContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

/*import React from "react";
import ReactDOM from "react-dom";
//import Users from "./Users";
import Task from "./task";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Task />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
