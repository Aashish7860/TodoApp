import type { ITodo } from "../types/Interface/todo";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
}

function TodoList({ todos }: ITodoListProps) {
  return (
    <div className="dp-todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export { TodoList };
