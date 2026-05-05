import { useState } from "react";
import { Button } from "./Button/Button";
import { Input } from "./Input/Input";

import { useTodoStore } from "../state/useTodoStore";

// interface IAddTodoProps {
//   onAddTodo: (todo: { title: string }) => void;
// }

// function AddTodo({ onAddTodo }: IAddTodoProps) {
function AddTodo() {
  const [title, setTitle] = useState("");

  const onAddTodo = useTodoStore((state) => state.addTodo);

  const handleAddClick = () => {
    if (title.trim() == "") {
      alert("Please input something");
      return;
    }
    onAddTodo(title);
    setTitle("");
  };

  return (
    <div className="dp-todo-add">
      <Input
        className="dp-todo-add__input"
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        className="dp-add-todo__button"
        type="button"
        label="Add"
        onClick={handleAddClick}
      />
    </div>
  );
}

export { AddTodo };
