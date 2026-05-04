import type { ITodo } from "./types/Interface/todo";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (todo: ITodo) => void;
}

export function TodoList({
  todos,
  onCompleted,
  onDelete,
  onUpdate,
}: ITodoListProps) {
  return (
    <div className="todo-list-table">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleted={onCompleted}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
