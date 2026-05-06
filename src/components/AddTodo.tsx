import { Button } from "./Button/Button";
import { Input } from "./Input/Input";

import { useTodoStore } from "../store/useTodoStore";

function AddTodo() {
  const addTitle = useTodoStore((state) => state.addTitle);
  const setTitle = useTodoStore((state) => state.setAddTitle);

  const onAddTodo = useTodoStore((state) => state.addTodo);
  // const handleAddClick = useTodoStore((state) => state.handleAddClick);

  const handleAddClick = () => {
    if (addTitle.trim() == "") {
      alert("Please input something");
      return;
    }
    onAddTodo(addTitle);
    setTitle("");
  };

  return (
    <div className="dp-add-todo">
      <Input
        className="dp-add-todo__input"
        type="text"
        placeholder="Add a new todo"
        value={addTitle}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        className="dp-add-todo__add-button"
        type="button"
        label="Add"
        onClick={handleAddClick}
      />
    </div>
  );
}

export { AddTodo };
