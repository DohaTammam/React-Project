import './TodoList.scss'
export  const TodoList = ({ todos,deleteTodo }) => {
 
  const handleRemove = (index)=>{

    todos.splice(index,1);
    const e = document.querySelector("li");
    e.parentElement.removeChild(e);

    deleteTodo(index);
  }

    const todosList =
      todos && todos.length > 0 ? (
        todos.map((todo, i) => {
          
          return (
            <ul key={i} className=" ">
              <li className="list-item d-grid p-3 w-75 mt-3">
                <div className="text">
   
                      <p><bold className="text-dark fs-5">Title</bold> : {todo.title}</p>
                      <p><bold className="text-dark fs-5">Content</bold> : {todo.content}</p>
         
                </div>
                <button onClick={()=>handleRemove(i)} className=" btn btn-danger my-3"> X</button>
              </li>
            </ul>
          );
        })
      ) : (
        <p className="h5 mx-5 text-muted text-danger">Waiting For Your List...</p>
      );
  
    return (
      <>
      <h5 className="mx-5 text-muted">Todos List</h5>
      <div className="text-left pe-4 list w-75">
        {todosList}
      </div>
      </>
    );
  };