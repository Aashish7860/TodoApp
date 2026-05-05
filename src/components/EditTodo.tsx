import { useState } from "react";

// import { Input } from "./Input/Input";
import type { ITodo } from "../types/Interface/todo";
import { TextArea } from "./TextArea/TextArea";
import { useTodoStore } from "../state/useTodoStore";

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
  // onChange: (updatedTodo: ITodo) => void;
}

function EditTodo({ todo }: IEditTodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const updatedTodo = useTodoStore((state) => state.updateTodo);

  const handleSave = () => {
    if (title != "" && title != todo.title) {
      updatedTodo({ ...todo, title: title });
    }
    setIsEditing(false);
  };

  return (
    <div className="dp-todo__edit-btn">
      {isEditing ? (
        <>
          <TextArea
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
          <span
            className="dp-todo__edit_title"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </span>
        </>
      )}
    </div>
  );
}

export default EditTodo;
