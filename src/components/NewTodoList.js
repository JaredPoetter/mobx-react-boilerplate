import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import NewTodo from "./NewTodo"

@observer export default class NewTodoList extends React.Component {
    @observable newTodoTitle = "";

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    Add Todo:
                    <input
                        type="text"
                        value={this.newTodoTitle}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add</button>
                    
                    

                </form>
                <button onClick={this.handleClear}>Clear</button>
                <button onClick={this.handlePurge}>Purge</button>
                    
                <hr />
                <ul>
                    {this.props.store.todos.map((todo, index) => (
                        <NewTodo todo={todo} key={index} store={this.props.store} />
                    ))}
                </ul>
                Tasks left: {this.props.store.unfinishedTodoCount}
            </div>
        );
    }


    @action handleInputChange = e => {
        this.newTodoTitle = e.target.value;
        console.log(e.target.value);
    };

    @action handleFormSubmit = e => {
        this.props.store.addTodo(this.newTodoTitle);
        this.newTodoTitle = "";
        e.preventDefault();
    };

    @action handleClear = e => {
        //this.newTodoTitle = "";
        let popped = this.props.store.todos.pop();
        console.log("Popped " + this.props.store.todos[0].title);
        //debugger;
    };

    @action handlePurge = e => {
        console.log("Attempting to purge");
        this.props.store.todos = [];
        if (this.props.store.todos == []) {
            console.log("List Purged.")
        }
    }
}