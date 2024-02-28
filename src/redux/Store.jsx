import { configureStore } from "@reduxjs/toolkit";
import { cartreducer } from "./cartreducer";

export const store = configureStore({
    reducer:{
        cart:cartreducer
    }
})