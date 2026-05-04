import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

import RemoveAllTodo from "./components/RemoveAllTodo";
import AddTodo from "./components/AddTodo";
import type { ITodo } from "./components/types/Interface/todo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  }, []);

  console.log(todos);

  const handleAddTodo = ({ title }: { title: string }) => {
    setTodos([
      {
        // id: todos.length + 1,
        id: Date.now(),
        title: title,
        completed: false,
      },
      ...todos,
    ]);
  };

  const onRemoveAllTodo = () => {
    setTodos([]);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  const handleUpdate = (updatedTodo: ITodo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)),
    );
  };

  return (
    <div className="container">
      <h1 className="todo-topheader">TODO APP</h1>

      <div className="row-container">
        <AddTodo onAddTodo={handleAddTodo} />
        {todos.length > 2 && <RemoveAllTodo onRemove={onRemoveAllTodo} />}
      </div>

      <TodoList
        todos={todos}
        onCompleted={handleCompleted}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
