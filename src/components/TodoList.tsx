import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

// import { Container } from './styles';

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: "Ir ao mercado", done: false },
    { id: 2, title: "Ir na academia", done: true },
  ];

  return (
    <div>
      <table className="uk-table">
        <caption>Lista de tarefas</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
