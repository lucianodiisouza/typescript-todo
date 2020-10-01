import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);

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
