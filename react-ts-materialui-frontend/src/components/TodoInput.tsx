import { useState } from "react";
import http from "../service/service";

interface Props {
  updateTodos: () => void;
}

export const TodoInput = ({ updateTodos }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onChangeUpdateTitle = (input: string) => {
    setTitle(input);
  };

  const onChangeUpdateDescription = (input: string) => {
    setDescription(input);
  };

  const onClickSubmitTodo = () => {
    http
      .post("/todos", {
        title: title,
        description: description,
      })
      .then(() => {
        // clear the input after creating a Todo
        setTitle("");
        setDescription("");
        updateTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        value={title}
        placeholder="enter the TODO title"
        onChange={(e) => onChangeUpdateTitle(e.target.value)}
      />
      <input
        value={description}
        placeholder="enter a description for the TODO"
        onChange={(e) => onChangeUpdateDescription(e.target.value)}
      />
      <button onClick={() => onClickSubmitTodo()}>Submit TODO</button>
    </div>
  );
};
