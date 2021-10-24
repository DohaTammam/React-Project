import { useState } from "react";
import './TodoForm.scss';

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="my-5 fs-2 fw-bold">Add A TODO</h3>

      <form onSubmit={handleSubmission} className="p-3 form mb-5">
    
        <div className="formItem">
          <label className="text-danger fs-4 fw-bold">Title</label><br/>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />
        <div className="formItem"> 
        <label className="text-danger fs-4 fw-bold">Content</label><br/>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-25"
          ></textarea>
        </div>

        <button className="my-4 btn btn-dark btn-sm px-4 fs-5 fw-bold" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};