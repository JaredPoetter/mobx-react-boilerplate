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
                <hr />
                <ul>
                    {this.props.store.todos.map((todo, index) => (
                        <NewTodo todo={todo} key={index} />
                    ))}
                </ul>
                Tasks left: {this.props.store.unfinishedTodoCount}
            </div>
        );
    }

    @action handleInputChange = e => {
        this.newTodoTitle = e.target.value;
    };

    @action handleFormSubmit = e => {
        this.props.store.addTodo(this.newTodoTitle);
        this.newTodoTitle = "";
        e.preventDefault();
    };
}
