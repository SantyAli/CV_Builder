import { configureStore } from "@reduxjs/toolkit";
import CVSlice from "./CVSlice";
const store = configureStore({
  reducer: {
    cv: CVSlice, 
  },
});
export default store