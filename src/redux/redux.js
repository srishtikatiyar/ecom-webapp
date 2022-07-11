import { createStore } from "redux";
const functions=require('./actions.js');
export const initialstate=[0];
const app=initialstate;

const reducer=(state=initialstate,action)=>{
switch(action.type){
    case "ADD_TO_CART":
        console.log(action);
            console.log(state);
               console.log(state===app);
               state[0]=state[0]+action.payload.rate;
                return [...state,action.payload];
            default :return state;
}
}
const store=createStore(reducer,initialstate,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;