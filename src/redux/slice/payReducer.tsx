import { createSlice } from "@reduxjs/toolkit";

interface PayloadAction<T> {
  type: string;
  payload: T;
}

interface payState {
  licensePlateNumber: string;
  stateLocation: string;
}

const initialState: payState = {
  licensePlateNumber: 'ABCD12',
  stateLocation: 'Florida'
  //Initial hourly rate value
};

export const payReducer = createSlice({
  name: "payInfo",
  initialState,
  reducers: {
    licensePlateNumber: (state: payState, action: PayloadAction<string>) => {
      state.licensePlateNumber = action.payload;
    },
    stateLocation: (state: payState, action: PayloadAction<string>) => {
      state.stateLocation = action.payload;
    }, 
    
  },
});

export const { licensePlateNumber, stateLocation} = payReducer.actions;

export default payReducer.reducer;
