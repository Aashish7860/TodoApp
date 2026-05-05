import { Button } from "./Button/Button";
import type { ITodo } from "../types/Interface/todo";
import { useTodoStore } from "../state/useTodoStore";

// interface IDeleteTodoProps {
//   todo: ITodo;
//   onDelete: (id: number) => void;
// }

// function DeleteTodo({ todo: todo, onDelete }: IDeleteTodoProps) {
//   return (
//     <>
//       <Button
//         label="Delete"
//         className="dp-todo__delete-btn"
//         onClick={() => onDelete(todo.id)}
//       />
//     </>
//   );
// }

interface IDeleteTodoProps {
  todo: ITodo;
  //   onDelete: (id: number) => void;
}

function DeleteTodo({ todo: todo }: IDeleteTodoProps) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  return (
    <>
      <Button
        label="Delete"
        className="dp-todo__delete-btn"
        onClick={() => deleteTodo(todo.id)}
      />
    </>
  );
}

export { DeleteTodo };
