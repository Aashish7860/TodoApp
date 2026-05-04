import Button from "./Button/Button";
import Input from "./Input/Input";
import EditTodo from "./EditTodo";
import type { ITodo } from "./types/Interface/todo";

interface ITodoItemProps {
  todo: ITodo;
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (todo: ITodo) => void;
}

function TodoItem({ todo, onCompleted, onDelete, onUpdate }: ITodoItemProps) {
  return (
    <div className="todo-row">
      <div className="todo-cell">
        <Input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onCompleted(todo.id)}
        />
      </div>

      <div className={`todo-cell ${todo.completed ? "check-completed" : ""}`}>
        <EditTodo todo={todo} onChange={onUpdate} />
      </div>

      <div className="todo-cell">
        <Button
          label="Delete"
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
