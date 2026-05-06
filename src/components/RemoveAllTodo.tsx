import { useTodoStore } from "../store/useTodoStore";
import { Button } from "./Button/Button";

function RemoveAllTodo() {
  const removeAll = useTodoStore((state) => state.removeAll);
  return (
    <>
      <div className="dp-remove-all-todo">
        <Button
          type="button"
          label="Remove All"
          className="dp-remove-all-todo__remove-btn"
          onClick={removeAll}
        ></Button>
      </div>
    </>
  );
}

export { RemoveAllTodo };
