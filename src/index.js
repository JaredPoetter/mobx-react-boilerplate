import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import NewTodoList from "./components/NewTodoList";
import TodoStore from "./stores/TodoStore"

// import "./styles.scss"

const store = new TodoStore();
const store2 = new TodoStore();



let promiseFunc = function(parameter) {
  alert("Param: " + parameter)
  let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // alert(resolve); // function () { [native code] }
    // alert(reject);  // function () { [native code] }

  
    // after 1 second signal that the job is done with the result "done!"
    setTimeout(() => {
      alert("Entering setTimeout...")
      resolve("done!")}, 4000);
  });
}

let moveItem = function(s1,s2) {
  if (s1.todos) {
    let popped = s1.todos.pop()
    console.log("popped obj: ", popped)
    s2.addTodo(popped.title)
  }
}

  const stylize = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
  const liststyle = {
    background: 'grey',
    display: 'flex',
    border: '1px solid black',
  }

render(

  <div style={stylize}>
    <DevTools />
    <NewTodoList store={store} style={liststyle}/>
    <NewTodoList store={store2} style={liststyle}/>

    {/* // below does not autorun */}
    {/* // below DOES autorun */}
    {/* <button id="testfunc" onClick={promiseFunc('value2')}>PressMe2</button> */}
    {/* <button id="testfunc" onClick={() => promiseFunc('value')}>PressMe</button> */}
    <button id="testing" onClick={() => moveItem(store,store2)}>Move</button>
  </div>,


  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
//store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
