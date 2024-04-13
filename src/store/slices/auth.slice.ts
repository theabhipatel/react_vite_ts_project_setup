import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "@store/apis/auth.api";
import { RootState } from "@store/store";

// Define a type for the slice state
interface IInitialState {
  value: number;
  isloading: boolean;
}

// Define the initial state using that type
const initialState: IInitialState = {
  value: 0,
  isloading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isloading = false;
      state.value = 0;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isloading = false;
    });
  },
});

/** ---> exporting actions. */
export const { increment, decrement, incrementByAmount } = authSlice.actions;

/** ---> exporting selectors. */
export const selectCount = (state: RootState) => state.auth.value;

/** ---> exporting reducer with default. */
export default authSlice.reducer;
