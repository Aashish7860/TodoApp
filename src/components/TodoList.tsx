import type { ITodo } from "../types/Interface/todo";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  // onCompleted: (id: number) => void;
  // onDelete: (id: number) => void;
  // onUpdate: (todo: ITodo) => void;
}

// function TodoList({ todos, onCompleted, onDelete, onUpdate }: ITodoListProps) {
//   return (
//     <div className="dp-todo-list">
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onCompleted={onCompleted}
//           onDelete={onDelete}
//           onUpdate={onUpdate}
//         />
//       ))}
//     </div>
//   );
// }

function TodoList({ todos }: ITodoListProps) {
  return (
    <div className="dp-todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          // onCompleted={onCompleted}
          // onDelete={onDelete}
          // onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export { TodoList };
