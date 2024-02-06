import { DECREMENT, INCREMENT } from "../Action/countAction"

const initialCountState = {
    count:0,
    name:"John"
}

export const countReducer = (state=initialCountState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{...state,count:state.count+action.payload}
        case DECREMENT:
            return{...state,count:state.count-action.payload}
        default:
            return state
    }
}