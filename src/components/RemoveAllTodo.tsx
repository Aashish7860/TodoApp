import Button from "./Button/Button";

function RemoveAllTodo({ onRemove }: { onRemove: () => void }) {
  return (
    <>
      <Button
        type="button"
        label="Remove All"
        className="on-remove"
        onClick={onRemove}
      ></Button>
    </>
  );
}

export default RemoveAllTodo;
