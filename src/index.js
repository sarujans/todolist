import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

var destination = document.querySelector("#container");
ReactDOM.render(<App />, destination);
