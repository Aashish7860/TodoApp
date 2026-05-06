import { Button } from "./Button/Button";
import type { ITodo } from "../types/Interface/todo";
import { useTodoStore } from "../store/useTodoStore";

interface IDeleteTodoProps {
  todo: ITodo;
}

function DeleteTodo({ todo: todo }: IDeleteTodoProps) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  return (
    <>
      <div className="dp-delete-todo">
        <Button
          label="Delete"
          className="dp-delete-todo__delete-btn"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </>
  );
}

export { DeleteTodo };
