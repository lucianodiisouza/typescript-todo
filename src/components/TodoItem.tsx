import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { Todo } from "../models/Todo";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = (props: TodoItemProps) => {
  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  };
  const handleChange = () => {
    toggle(props.todo);
  };

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            type="checkbox"
            checked={props.todo.done}
            onChange={handleChange}
            className="uk-checkbox"
          />
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-wdth-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.todo)}
        ></button>
      </td>
    </tr>
  );
};

export default TodoItem;
