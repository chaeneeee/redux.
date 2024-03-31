import { act } from "react-dom/test-utils";

let initialState={
    count:0,
    id:"",
    password:"",
}


function reducer (state=initialState,action){
    console.log("action", action)
//     if(action.type==="INCREMENT"){
//         return{...state,count:state.count+action.payload.num}
//     //reducer 은 항상 return 을 해줘야한다. ...state는 무조건 들어가야한다
// }     //action 의 행동지침을 if 문 or switch 문으로 표현 return 은 무조건
// return {...state};
// }
//switch 문으로 했을 때 
switch (action.type) {
    case "INCREMENT" : 
    return {...state, count : state.count+1};
    case "LOGIN" :
    return{...state, id:action.payload.id,
        password:action.payload.password
    }
    case "DECREMENT":
        return{...state, count:state.count-1};


    default:
        return{...state}
}
}
export default reducer;