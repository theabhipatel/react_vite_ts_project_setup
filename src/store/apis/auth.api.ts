import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@utils/axiosInstance";

interface ILoginData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk("auth/login", async (data: ILoginData) => {
  const res = await axiosInstance.post("/login", data);

  return res.data;
});
