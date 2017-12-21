import { observable, computed, action } from "mobx";

export default class TodoListModel {
    @observable todos = [];

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action
    addTodo(title) {
        this.todos.push({
            finished: false,
            title: title,
        });
    }
}
