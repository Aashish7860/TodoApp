// function LoadData({ todos, onCompleted }: any) {
    function LoadData({ todos, onCompleted ,onDelete}: any) {
  return (
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
                      {/* <button className="update-btn" onClick={() => onEdit({id: todo.id})}>Edit</button> */}
                         <button className="delete-btn" onClick={() => onDelete({id: todo.id})}>Delete</button>
                </div>
            </div>
          ))}
        </div>
  )
}


export default LoadData;