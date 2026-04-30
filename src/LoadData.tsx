function LoadData({ todos, onCompleted }: any) {
  return (
        <div className="todo-table">
          <div className="todo-row todo-header">
            <div className="todo-cell">ID</div>
            <div className="todo-cell">Title</div>
            <div className="todo-cell">Completed</div>
          </div>
          {todos.map((todo:any) => (
            <div className="todo-row" key={todo.id}>
              <div className="todo-cell">{todo.id}</div>
              <div className="todo-cell">{todo.title}</div>
              {/* <div className="todo-cell">{todo.completed.toString()}</div> */}
              <div className="todo-cell"><input type='checkbox' checked={todo.completed} onChange={() => onCompleted({ id: todo.id })} /></div>
            </div>
          ))}
        </div>
  )
}


export default LoadData;