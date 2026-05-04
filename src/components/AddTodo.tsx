import { useState } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

function AddTodo({ onAddTodo }: any) {
  const [title, setTitle] = useState("");
  return (
    <div className="add-todo">
      <label>Add a new todo:</label>
      <Input
        type="text"
        placeholder="Add a new todo"
        // value={title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        type="button"
        label="Add"
        className="add-todo-button"
        onClick={() => {
          (onAddTodo({ title }), setTitle(""));
        }}
      ></Button>
    </div>
  );
}

export default AddTodo;
