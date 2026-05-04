import { useState } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

interface IAddTodoProps {
  onAddTodo: (todo: { title: string }) => void;
}

function AddTodo({ onAddTodo }: IAddTodoProps) {
  const [title, setTitle] = useState("");

  const handleAddClick = () => {
    if (title.trim() == "") {
      alert("Please input something");
      return;
    }
    onAddTodo({ title });
    setTitle("");
  };

  return (
    <div className="add-todo">
      <Input
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        type="button"
        label="Add"
        className="add-todo-button"
        onClick={handleAddClick}
      />
    </div>
  );
}

export default AddTodo;
