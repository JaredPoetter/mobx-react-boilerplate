import { observable, computed, action } from "mobx";

export default class TodoListModel {
    @observable todos = [];
    @observable dones = [];

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action
    addTodo(title) {
        let numero = Math.random()
        this.todos.push({
            finished: false,
            title: title,
            numero: numero,
        });
    }
}
