//Action

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const Increment = (payload)=>{
    return{
        type:INCREMENT,
        payload
 }
}
export const Decrement = (payload)=>{
    return{
        type:DECREMENT,
        payload
    }
}

//state 
const initialState = {
    count:0
}

//reducer
export const counterReducer = (state= initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return{...state, count:(state.count + action.payload)}
        case DECREMENT:
            return{...state, count:(state.count - action.payload)}
        default:
            return state;
    }
}

