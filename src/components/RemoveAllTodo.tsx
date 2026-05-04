import Button from "./Button/Button";

function RemoveAllTodo({ onRemove }: any) {
  return (
    <>
      {/* <button className="on-remove" type="button" onClick={onRemove}> */}

      {/* </button> */}
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
