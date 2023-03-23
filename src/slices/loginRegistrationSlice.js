import { createSlice } from "@reduxjs/toolkit";
import { users } from "../constants/users";

const getInitialUsers = () => {
	const localUserList = window.localStorage.getItem("userList");
	console.log(localUserList, "localUserList");
	if (localUserList) {
		return localUserList;
	}
	window.localStorage.setItem("userList", JSON.stringify(users));
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
			console.log(state.userList, userList, "slice register 2");
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
			const userList = window.localStorage.getItem("userList");
			if (userList) {
				const todoListArr = JSON.parse(userList);
				todoListArr.forEach((todo) => {
					if (todo.id === action.payload.id) {
						todo.status = action.payload.email;
						todo.title = action.payload.password;
					}
				});
				window.localStorage.setItem("userList", JSON.stringify(todoListArr));
				state.userList = [...todoListArr];
			}
		},
	},
});

export const { loginUser, registerUser, deleteEvent, updateFilterStatus } =
	loginRegistrationSlice.actions;
export default loginRegistrationSlice.reducer;
