import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

import { RemoveAllTodo } from "./components/RemoveAllTodo";
import { AddTodo } from "./components/AddTodo";
import type { ITodo } from "./types/Interface/todo";
import "./App.css";
import { useTodoStore } from "./state/useTodoStore";

function App() {
  // const [todos, setTodos] = useState<ITodo[]>([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setTodos(json);
  //     });
  // }, []);

  // console.log(todos);

  // const handleAddTodo = ({ title }: { title: string }) => {
  //   setTodos([
  //     {
  //       // id: todos.length + 1,
  //       id: Date.now(),
  //       title: title,
  //       completed: false,
  //     },
  //     ...todos,
  //   ]);
  // };

  // const onRemoveAllTodo = () => {
  //   setTodos([]);
  // };

  // const handleDelete = (id: number) => {
  //   setTodos(todos.filter((t) => t.id !== id));
  // };

  // const handleCompleted = (id: number) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       }
  //       return todo;
  //     }),
  //   );
  // };

  // const handleUpdate = (updatedTodo: ITodo) => {
  //   setTodos((prev) =>
  //     prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)),
  //   );
  // };

  //new method
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="dp-app">
      <h1 className="dp-app__header">TODO APP</h1>

      <div className="dp-app__actions">
        {/* <AddTodo onAddTodo={handleAddTodo} /> */}
        <AddTodo />

        {todos.length > 2 && <RemoveAllTodo />}
      </div>

      <TodoList
        todos={todos}
        // onCompleted={handleCompleted}
        // onDelete={handleDelete}
        // onUpdate={handleUpdate}
      />
    </div>
  );
}

export { App };
