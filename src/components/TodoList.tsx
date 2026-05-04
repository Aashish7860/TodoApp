import { useState } from "react";
import Button from "./Button/Button";

import EditTodo from "./EditTodo";
import Input from "./Input/Input";

interface ITodo {
  id: number | string;
  title: string;
  completed: boolean;
}

interface ITodoListProps {
  todos: ITodo[];
  // onCompleted?: (todo: { id: number | string }) => void;
  // onDelete: (id: number | string) => void;
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (updatedTodo: ITodo) => void;
}
export function TodoList({
  todos,
  onCompleted,
  onDelete,
  onUpdate,
}: ITodoListProps) {
  return (
    <div className="todo-list-table">
      {todos.map((todo: any) => (
        <div className="todo-row" key={todo.id}>
          <div className="todo-cell">
            <Input
              type="checkbox"
              name="name"
              checked={todo.completed}
              onChange={() => onCompleted(todo.id)}
            />
          </div>

          <div
            className={`todo-cell ${todo.completed ? "check-completed" : ""}`}
          >
            <EditTodo todo={todo} onChange={onUpdate} />

            {/* {todo.title} */}
          </div>

          <div className="todo-cell lastcell">
            <Button
              type="button"
              label="Delete"
              className="delete-btn"
              onClick={() => onDelete(todo.id)}
            ></Button>
          </div>
        </div>
      ))}
    </div>
  );
}
