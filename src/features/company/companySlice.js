import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import companyService from "./companyService";

export const getCompanies = createAsyncThunk(
  "companies/get-companies",
  async (thunkAPI) => {
    try {
      return await companyService.getCompanies();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// to stop getting train added message again and again
export const resetState = createAction("RevertAll");

const initialState = {
  trains: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.companies = action.payload;
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default companySlice.reducer;
