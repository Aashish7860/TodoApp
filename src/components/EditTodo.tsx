import { useEffect, useState } from "react";

// import { Input } from "./Input/Input";
import type { ITodo } from "../types/Interface/todo";
import { TextArea } from "./TextArea/TextArea";
import { useTodoStore } from "../store/useTodoStore";
import { useShallow } from "zustand/shallow";

// interface IEditTodoProps {
//   todo: ITodo;
//   onChange: (updatedTodo: ITodo) => void;
// }

// function EditTodo({ todo, onChange }: IEditTodoProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState(todo.title);

//   const handleSave = () => {
//     if (title != "" && title != todo.title) {
//       onChange({ ...todo, title: title });
//     }
//     setIsEditing(false);
//   };

//   return (
//     <div className="dp-todo__edit-btn">
//       {isEditing ? (
//         <>
//           <TextArea
//             value={title}
//             autoFocus
//             onChange={(e) => setTitle(e.target.value)}
//             onBlur={handleSave}
//             onKeyDown={(e) => {
//               if (e.key == "Enter") {
//                 handleSave();
//               }
//               if (e.key == "Escape") {
//                 setTitle(todo.title);
//                 setIsEditing(false);
//               }
//             }}
//           />
//         </>
//       ) : (
//         <>
//           <span
//             className="dp-todo__edit_title"
//             onDoubleClick={() => setIsEditing(true)}
//           >
//             {todo.title}
//           </span>
//         </>
//       )}
//     </div>
//   );
// }

// export default EditTodo;

interface IEditTodoProps {
  todo: ITodo;
}

function EditTodo({ todo }: IEditTodoProps) {
  // const [isEditing, setIsEditing] = useState(false);
  // const [title, setTitle] = useState(todo.title);

  // const setTitle = useTodoStore((state) => state.setTitle);

  const updateTodo = useTodoStore((state) => state.updateTodo);
  const isEditing = useTodoStore((state) => state.isEditing);
  const startEditing = useTodoStore((state) => state.startEditing);
  const stopEditing = useTodoStore((state) => state.stopEditing);
  // const setIsEditing = useTodoStore((state) => state.setIsEditing);
  const currentTodo = useTodoStore((state) => state.currentTodo);

  const currentUser = isEditing && currentTodo?.id == todo.id;

  const updateTitle = useTodoStore((state) => state.updateTitle);
  const setUpdateTitle = useTodoStore((state) => state.setUpdateTitle);

  const handleSaveForUpdate = () => {
    if (updateTitle != "" && updateTitle != todo.title) {
      updateTodo({ ...todo, title: updateTitle });
    }
    stopEditing(todo, false);
  };

  return (
    <div className="dp-edit-todo">
      {isEditing && currentUser ? (
        <>
          <TextArea
            value={updateTitle}
            autoFocus
            onChange={(e) => setUpdateTitle(e.target.value)}
            onBlur={handleSaveForUpdate}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSaveForUpdate;
              }
              if (e.key == "Escape") {
                setUpdateTitle(todo.title);
                stopEditing(todo, false);
              }
            }}
          />
        </>
      ) : (
        <>
          <span
            className="dp-edit-todo__title"
            onDoubleClick={() => {
              startEditing(todo);
            }}
          >
            {todo.title}
          </span>
        </>
      )}
    </div>
  );
}

export default EditTodo;
