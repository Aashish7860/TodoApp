import { useTodoStore } from "../state/useTodoStore";
import { Button } from "./Button/Button";

// function RemoveAllTodo({ onRemove }: { onRemove: () => void }) {
function RemoveAllTodo() {
  const removeAll = useTodoStore((state) => state.removeAll);
  return (
    <>
      <Button
        type="button"
        label="Remove All"
        className="dp-todo__remove-all-btn"
        onClick={removeAll}
      ></Button>
    </>
  );
}

export { RemoveAllTodo };
