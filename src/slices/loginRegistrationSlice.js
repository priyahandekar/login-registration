import { createSlice } from "@reduxjs/toolkit";

const getInitialUsers = () => {
	const localUserList = window.localStorage.getItem("userList");
	if (localUserList) {
		return JSON.parse(localUserList);
	}
	window.localStorage.setItem("userList", []);
	return [];
};

const getLoggedInUser = () => {
	const localLoggedInUser = window.localStorage.getItem("userEmail");
	if (localLoggedInUser) {
		return localLoggedInUser;
	}
	window.localStorage.setItem("userEmail", "");
	return "";
};

const initialValue = {
	userList: getInitialUsers(),
	loggedInUser: getLoggedInUser(),
};

export const loginRegistrationSlice = createSlice({
	name: "loginRegistration",
	initialState: initialValue,
	reducers: {
		registerUser: (state, action) => {
			state.userList.push(action.payload);
			const userList = window.localStorage.getItem("userList");
			if (userList) {
				const userListArr = JSON.parse(userList);
				userListArr.push({
					...action.payload,
				});
				window.localStorage.setItem("userList", JSON.stringify(userListArr));
			} else {
				window.localStorage.setItem(
					"userList",
					JSON.stringify([
						{
							...action.payload,
						},
					])
				);
			}
		},
		loginUser: (state, action) => {
			window.localStorage.setItem("userEmail", action.payload.email);
			state.loggedInUser = action.payload.email;
		},
	},
});

export const { loginUser, registerUser, deleteEvent, updateFilterStatus } =
	loginRegistrationSlice.actions;
export default loginRegistrationSlice.reducer;
