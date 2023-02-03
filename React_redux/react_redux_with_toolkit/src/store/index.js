import { createSlice, configureStore} from '@reduxjs/toolkit';
//import {applyMiddleware} from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0
  },
  reducers: {
    increment(state) {
      state.counter += 1
    },
    decrement(state){
      state.counter -= 1
    },
    reset(state){
      state.counter=0
    }
  }
})

export const { increment, decrement,reset} = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store;
