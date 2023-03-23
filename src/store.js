import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/eventSlice";
import loginRegistrationReducer from "./slices/loginRegistrationSlice";

const store = configureStore({
	reducer: {
		event: eventReducer,
		loginRegistration: loginRegistrationReducer,
	},
});

// import rootReducer from "./reducers";
// import { createStore } from "redux";

// const store = createStore(rootReducer);

export default store;
