//Action

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const Increment = (payload)=>{
    return{
        type:INCREMENT,
        payload
 }
}
export const decrement = (payload)=>{
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


//store