import { useEffect, useState } from "react";
// import LoadData from "./LoadData";

  const MyTodoList=[
  {
    id:1, title:"Learning React", completed:true
  },
  {
    id:2,title:"Learning JavaScript", completed:false
  },
  {
    id:3, title:"Learning HTML", completed:true
  }
];

function App() {


  const [todos, setTodos] = useState(MyTodoList);
  // const [todos, setTodos] = useState([] as any[]);
  //  useEffect(()=>{
  //       fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then(response => response.json())
  //       .then(json => setTodos(json))
  //   },[])

  console.log(todos);
const handleAddTodo=({title}: any)=>{

  setTodos([...todos,{
    id:todos.length + 1,
    title:title,
    completed:false}])
};

const onRemoveAllTodo=()=>{
    if(todos.length>2){
      setTodos([]);
    }
}
const handleDelete=({id}:any)=>{
  setTodos(todos.filter(t=> t.id !==id))
}
const handleCompleted=({id}: any)=>{

    setTodos(todos.map(t=>{
      if(t.id === id){
        return {...t, completed: !t.completed};
      }
      return t;
    }))
}
  return (
    <div className="container">
      <AddTodo onAddTodo={handleAddTodo} />
      <RemoveAllTodo onRemove={onRemoveAllTodo}/>
      <TodoList todos={todos} onCompleted={handleCompleted} onDelete={handleDelete}/>
      {/* <LoadData todos={todos} onCompleted={handleCompleted} /> */}
    </div>
  )
}


function AddTodo({ onAddTodo }: any) {
  const [title, setTitle] = useState("");
  return (
    <div className="add-todo">
      <label>Add a new todo:</label>
      <input id="new-todo" type="text" placeholder="Add a new todo" value={title} onChange={(e) => setTitle(e.target.value)} />

      <button type="button" onClick={() =>  {onAddTodo({title}) ,setTitle("")}}>
        Add
      </button>
    </div>
  )
}

function RemoveAllTodo({onRemove}:any){
    return(
      <>
         <button type="button" onClick={onRemove}>
          
        Remove All
      </button>
      </>
    )
}



function TodoList({ todos, onCompleted ,onEdit,onDelete}: any) {
      return(
        <div className="todo-table">
          <div className="todo-row todo-header">
            <div className="todo-cell">ID</div>
            <div className="todo-cell">Title</div>
            <div className="todo-cell">Completed</div>
            <div className="todo-cell">Actions</div>
          </div>
          {todos.map((todo:any) => (
            <div className="todo-row" key={todo.id}>
              <div className="todo-cell">{todo.id}</div>
              <div className="todo-cell">{todo.title}</div>
              {/* <div className="todo-cell">{todo.completed.toString()}</div> */}
              {/* <div className="todo-cell"><input type='checkbox' checked={todo.completed} onChange={() => onCompleted({ id: todo.id })} /></div> */}
              <div className="todo-cell">
                <input className="check-complete" type='checkbox' checked={todo.completed} onChange={(e) => onCompleted({...todo, completed: e.target.checked})} />
                </div>
                
                <div className="todo-cell lastcell">
                      <button className="update-btn" onClick={() => onEdit({id: todo.id})}>Edit</button>
                         <button className="delete-btn" onClick={() => onDelete({id: todo.id})}>Delete</button>
                </div>
            </div>

          ))}
        </div>
      )
}

export default App
