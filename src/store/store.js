import { createStore } from "redux";

const initialStore={
    balance:100,
    First_Name:"Suresh",
    Phone_Number:null
}


const BankReducer=(state=initialStore,action)=>{
    switch (action.type) {
        case "Deposit":
            return {...state,balance:state.balance + + action.payload}
        default:
            return state
    }
}

const BankStore=createStore(BankReducer)

export default BankStore