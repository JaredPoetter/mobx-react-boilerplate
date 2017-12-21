import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import NewTodoList from "./components/NewTodoList";
import TodoStore from "./stores/TodoStore"

const store = new TodoStore();

render(
  <div>
    <DevTools />
    <NewTodoList store={store}/>
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
