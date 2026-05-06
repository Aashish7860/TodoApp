import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

import { RemoveAllTodo } from "./components/RemoveAllTodo";
import { AddTodo } from "./components/AddTodo";
import type { ITodo } from "./types/Interface/todo";
import "./App.css";
import { useTodoStore } from "./store/useTodoStore";

function App() {
  const todos = useTodoStore((state) => state.todos);
  const fetchTodos = useTodoStore((state) => state.fetchTodoList);

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos.length);
  return (
    <div className="dp-app">
      <h1 className="dp-app__header">TODO APP</h1>

      <div className="dp-app__actions">
        <AddTodo />

        {todos.length > 2 && <RemoveAllTodo />}
      </div>

      <TodoList todos={todos} />
    </div>
  );
}

export { App };
