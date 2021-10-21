import { useState } from "react";

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
            <ul key={i} id={i}>
              <li className="border d-flex">
                <div className="text">
                    <p>Title : {todo.title}</p>
                    <p>Content : {todo.content}</p>
                </div>
                <button onClick={()=>handleRemove(i)} className=" btn btn-danger ms-5 my-3"> X</button>
              </li>
            </ul>
          );
        })
      ) : (
        <p className="h5 mx-5 text-muted text-danger">no items on the list ..</p>
      );
  
    return (
      <div className="text-left">
        <h5 className="mx-5 text-muted">Todos List</h5>
        {todosList}
      </div>
    );
  };