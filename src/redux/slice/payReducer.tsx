import { createSlice } from "@reduxjs/toolkit";

interface PayloadAction<T> {
  type: string;
  payload: T;
}

interface payState {
  licensePlateNumber: string;
}

const initialState: payState = {
  licensePlateNumber: 'ABCD12'
  //Initial hourly rate value
};

export const payReducer = createSlice({
  name: "payInfo",
  initialState,
  reducers: {
    licensePlateNumber: (state: payState, action: PayloadAction<string>) => {
      state.licensePlateNumber = action.payload;
    }, 
    
  },
});

export const { licensePlateNumber} = payReducer.actions;

export default payReducer.reducer;
