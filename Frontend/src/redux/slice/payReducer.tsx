import { createSlice } from "@reduxjs/toolkit";

interface PayloadAction<T> {
  type: string;
  payload: T;
}

interface payState {
  licensePlateNumber: string;
  stateLocation_redux: string;
  parkingChargeNumber_redux: string;
  payAmount_redux: number;
  firstName_redux: string;
  lastName_redux: string;
}

const initialState: payState = {
  licensePlateNumber: 'ABCD12',
  stateLocation_redux: 'Florida',
  parkingChargeNumber_redux: 'DX-101',
  payAmount_redux: 120,
  firstName_redux: "James",
  lastName_redux: "William",
  //Initial hourly rate value
};

export const payReducer = createSlice({
  name: "payInfo",
  initialState,
  reducers: {
    licensePlateNumber: (state: payState, action: PayloadAction<string>) => {
      state.licensePlateNumber = action.payload;
    },
    stateLocation_redux: (state: payState, action: PayloadAction<string>) => {
      state.stateLocation_redux = action.payload;
    }, 
    parkingChargeNumber_redux: (state: payState, action: PayloadAction<string>) => {
      state.parkingChargeNumber_redux = action.payload;
    }, 
    payAmount_redux: (state: payState, action: PayloadAction<number>) => {
      state.payAmount_redux = action.payload;
    }, 
    firstName_redux: (state: payState, action: PayloadAction<string>) => {
      state.firstName_redux = action.payload;
    },
    lastName_redux: (state: payState, action: PayloadAction<string>) => {
      state.lastName_redux = action.payload;
    },
    
  },
});

export const { licensePlateNumber, stateLocation_redux, parkingChargeNumber_redux, payAmount_redux, firstName_redux, lastName_redux} = payReducer.actions;

export default payReducer.reducer;
