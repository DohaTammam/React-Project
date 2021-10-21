import { useDispatch, useSelector } from "react-redux";
import { TodoForm } from '../../todo/TodoForm';
import {TodoList} from '../../todo/TodoList';
import { addTodoAction } from '../../Redux/todo'
import { delTodoAction } from '../../Redux/todo'
function Todo() {

  const todoState = useSelector(state => state.todos);
  const dispatch = useDispatch();
  
  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };

  const deleteTodo = (index) => {
    dispatch(delTodoAction(index));
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoState}  deleteTodo={deleteTodo}/>
    </div>
  );
}

export default Todo;