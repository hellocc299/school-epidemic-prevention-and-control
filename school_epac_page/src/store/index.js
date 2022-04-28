import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login";
import mainReducer from './main'

const cReducer = configureStore({
  reducer: {
    login: loginReducer,
    main: mainReducer
  }
})

export default cReducer