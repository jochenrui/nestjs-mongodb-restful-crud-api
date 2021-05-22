import { useEffect, useState } from "react";
import http from "../service/service";
import { Todo } from "../common/types";
import { TodoCard } from "../components/TodoCard";
import { TodoInput } from "../components/TodoInput";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // fetch all todos
    http
      .get<Todo[]>("/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderTodos = todos.map((todo) => {
    return (
      <TodoCard
        title={todo.title}
        description={todo.description}
        createdAt={todo.createdAt}
      />
    );
  });

  return (
    <div>
      {renderTodos}
      <TodoInput />
    </div>
  );
};
