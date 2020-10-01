import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { TodoContextType } from "../contexts/TodoContextType";

const schema = yup.object().shape({
  title: yup.string().required("Dados inválidos"),
});

interface AddtodoForm {
  title: string;
}

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddtodoForm, e: any) => {
    addTodo(data.title);
    e.target.reset();
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit<AddtodoForm>(onSubmit)}>
      <h4>Nova tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite sua tarefa"
          className="uk-input"
          ref={register}
        />
        <span>
          <small>
            <strong className="uk-text-danger">{errors.title?.message}</strong>
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
