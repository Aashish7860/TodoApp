import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

import RemoveAllTodo from "./components/RemoveAllTodo";
import AddTodo from "./components/AddTodo";

function App() {
  // const [todos, setTodos] = useState(MyTodoList);
  const [todos, setTodos] = useState([] as any[]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const sortedData = json.sort(
          (a: { id: number }, b: { id: number }) => b.id - a.id,
        );
        setTodos(sortedData);
        // setTodos(json));
      });
  }, []);

  console.log(todos);
  const handleAddTodo = ({ title }: any) => {
    if (title.trim() == "") {
      alert("Please input something");
    }
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
        completed: false,
      },
    ]);
  };

  const onRemoveAllTodo = () => {
    if (todos.length > 2) {
      setTodos([]);
    }
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      }),
    );
  };
  const handleUpdate = (updatedTodo: any) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)),
    );
  };

  return (
    <div className="container">
      <h1 className="todo-topheader">TODO APP</h1>
      <div className="row-container">
        <AddTodo onAddTodo={handleAddTodo} />
        <RemoveAllTodo onRemove={onRemoveAllTodo} />
      </div>
      {/* <TodoList todos={todos} onCompleted={handleCompleted} onDelete={handleDelete}/> */}
      <TodoList
        todos={todos}
        onCompleted={handleCompleted}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

// function TodoList({ todos, onCompleted ,onEdit,onDelete}: any) {
//       return(
//         <div className="todo-table">
//           <div className="todo-row todo-header">
//             <div className="todo-cell">ID</div>
//             <div className="todo-cell">Title</div>
//             <div className="todo-cell">Completed</div>
//             <div className="todo-cell">Actions</div>
//           </div>
//           {todos.map((todo:any) => (
//             <div className="todo-row" key={todo.id}>
//               <div className="todo-cell">{todo.id}</div>
//               <div className="todo-cell">{todo.title}</div>
//               {/* <div className="todo-cell">{todo.completed.toString()}</div> */}
//               {/* <div className="todo-cell"><input type='checkbox' checked={todo.completed} onChange={() => onCompleted({ id: todo.id })} /></div> */}
//               <div className="todo-cell">
//                 <input className="check-complete" type='checkbox' checked={todo.completed} onChange={(e) => onCompleted({...todo, completed: e.target.checked})} />
//                 </div>

//                 <div className="todo-cell lastcell">
//                       <button className="update-btn" onClick={() => onEdit({id: todo.id})}>Edit</button>
//                          <button className="delete-btn" onClick={() => onDelete({id: todo.id})}>Delete</button>
//                 </div>
//             </div>

//           ))}
//         </div>
//       )
// }

export default App;
