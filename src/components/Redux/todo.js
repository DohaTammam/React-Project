import { createStore } from "redux";

//Action 
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

export const addTodoAction  =(payload)=> {
    return {
        type:ADD_TODO,
        payload
    }
}
export const delTodoAction = (payload)=>{
    return {
        type:DEL_TODO,
        payload
    }
 }

//state
const initialState = {
    todos:[]
}

//Reducer
const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {...state, todos : [...state.todos,action.payload]};
        case DEL_TODO:
            return {...state, todos: [...state.todos,action.payload]}
        default:
            return state;
    }
}

//Store
export const store =createStore(todoReducer);