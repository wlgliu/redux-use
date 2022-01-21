import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CounterState {
  value: number
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  } as CounterState,
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    }
  }
});

export const {incremented, decremented} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
