import { createReducer } from "@reduxjs/toolkit";

const initialstates = {
    isloading:false,
    cart:[],
    iserror:false
}

export const cartreducer = createReducer(initialstates , (builder)=>{
    builder.addCase("addcartitemsuccess" , (state,action)=>{
        state.cart=[...state.cart , action.payload]
    })
    builder.addCase("getcartitembyemailidpending" , (state)=>{
        state.isloading=true
    })
    builder.addCase("getcartitembyemailidsuccess" , (state,action)=>{
        state.isloading=false
        state.cart=action.payload
    })
    builder.addCase("getitem" , (state,action)=>{
        state.cart=action.payload
    })
})