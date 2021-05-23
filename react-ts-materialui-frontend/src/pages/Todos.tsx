import { useEffect, useState } from "react";
import http from "../service/service";
import { Todo } from "../common/types";
import { TodoCard } from "../components/TodoCard";
import { TodoInput } from "../components/TodoInput";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoCreated, setTodoCreated] = useState<number>(0);

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
  }, [todoCreated]);

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
      <TodoInput updateTodos={() => setTodoCreated(todoCreated + 1)} />
    </div>
  );
};
