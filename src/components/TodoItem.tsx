// import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import EditTodo from "./EditTodo";
import type { ITodo } from "../types/Interface/todo";
import { DeleteTodo } from "./DeleteTodo";
import { useTodoStore } from "../store/useTodoStore";

interface ITodoItemProps {
  todo: ITodo;
}

function TodoItem({ todo }: ITodoItemProps) {
  const handleCompleted = useTodoStore((state) => state.toggleHandleCompleted);
  return (
    <div className="dp-todo-item">
      <Input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCompleted(todo.id)}
      />

      <div
        className={`dp-todo-item__title ${todo.completed ? "dp-todo-item__title--completed" : ""}`}
      >
        <EditTodo todo={todo} />
      </div>

      <DeleteTodo todo={todo}></DeleteTodo>
    </div>
  );
}

export { TodoItem };
