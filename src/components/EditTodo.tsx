import { useState } from "react";

import Input from "./Input/Input";

interface ITodo {
  id: number | string;
  title: string;
  completed: boolean;
}

interface IEditTodoProps {
  todo: ITodo;
  onChange: (updatedTodo: ITodo) => void;
}

function EditTodo({ todo, onChange }: IEditTodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle !== todo.title) {
      onChange({ ...todo, title: trimmedTitle });
    }
    setIsEditing(false);
  };

  return (
    <div className="edit-todo">
      {isEditing ? (
        <>
          <Input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSave();
              }
              if (e.key == "Escape") {
                setTitle(todo.title);
                setIsEditing(false);
              }
            }}
          />
        </>
      ) : (
        <>
          <span onDoubleClick={() => setIsEditing(true)}>{todo.title}</span>
        </>
      )}
    </div>
  );
}

export default EditTodo;
