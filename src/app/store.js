import { configureStore } from "@reduxjs/toolkit" 
//const { getDefaultMiddleware } = require("@reduxjs/toolkit")
// const reduxLogger = require("redux-logger")
import userReducer from "../features/Users/userSlice"

//const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        user: userReducer,
    },

   // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)

    
})

export default store