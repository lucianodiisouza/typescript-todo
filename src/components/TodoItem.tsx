import React from "react";
import { Todo } from "../models/Todo";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = (props: TodoItemProps) => {
  const onRemove = (todo: Todo) => {
    console.log(todo);
  };
  const handleChange = () => {
    console.log("mudou");
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
