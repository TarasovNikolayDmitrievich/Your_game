import reducer from "./reducer/reducer";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer
})

export default store;
