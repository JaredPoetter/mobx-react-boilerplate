import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer export default class NewTodo extends React.Component {
    handleInputChange = e => {
        this.newTodoTitle = e.target.value;
    };

    handleFormSubmit = e => {
        this.props.store.addTodo(this.newTodoTitle);
        this.newTodoTitle = "";
        e.preventDefault();
    };

    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.todo.finished}
                    onClick={() => (this.props.todo.finished = !this.props.todo.finished)}
                />
                {this.props.todo.title}
            </li>
        );
    }
}
