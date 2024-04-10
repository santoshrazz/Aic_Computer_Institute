import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Store/slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
export default store;
