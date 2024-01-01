import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/company/companySlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer
  },
});
