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
                    onClick={() => {
                    this.props.todo.finished = !this.props.todo.finished
                    //debugger;
                    this.props.store.todos.forEach(function(elem) {
                        console.log(elem);
                    });
                    for(let i=0; i < this.props.store.todos.length; i++) {
                        console.log("FOR loop idx: " + i);
                        if (this.props.todo.finished) {
                            if (this.props.store.todos[i].numero == this.props.todo.numero) {
                                this.props.store.todos.splice(i,1);
                            }
                        }
                    }
                    console.log(this.props.store)
                    }
                }
                />
                {this.props.todo.title}
            </li>
        );
    }
}
