import { createSlice } from "@reduxjs/toolkit";

const getInitialEvents = () => {
	// getting todo list
	const localTodoList = window.localStorage.getItem("eventList");
	// if todo list is not empty
	if (localTodoList) {
		return JSON.parse(localTodoList);
	}
	window.localStorage.setItem("eventList", []);
	return [];
};

const initialValue = {
	filterStatus: "all",
	eventList: [],
};

export const eventSlice = createSlice({
	name: "event",
	initialState: initialValue,
	reducers: {
		addEvent: (state, action) => {
			console.log(action.payload, "slice");
			// state.eventList.push(action.payload);
			// const eventList = window.localStorage.getItem("eventList");
			// if (eventList) {
			// 	const todoListArr = JSON.parse(eventList);
			// 	todoListArr.push({
			// 		...action.payload,
			// 	});
			// 	window.localStorage.setItem("eventList", JSON.stringify(todoListArr));
			// } else {
			// 	window.localStorage.setItem(
			// 		"eventList",
			// 		JSON.stringify([
			// 			{
			// 				...action.payload,
			// 			},
			// 		])
			// 	);
			// }
		},
		updateEvent: (state, action) => {
			const eventList = window.localStorage.getItem("eventList");
			if (eventList) {
				const todoListArr = JSON.parse(eventList);
				todoListArr.forEach((todo) => {
					if (todo.id === action.payload.id) {
						todo.status = action.payload.status;
						todo.title = action.payload.title;
					}
				});
				window.localStorage.setItem("eventList", JSON.stringify(todoListArr));
				state.eventList = [...todoListArr];
			}
		},
		deleteEvent: (state, action) => {
			const eventList = window.localStorage.getItem("eventList");
			if (eventList) {
				const todoListArr = JSON.parse(eventList);
				todoListArr.forEach((todo, index) => {
					if (todo.id === action.payload) {
						todoListArr.splice(index, 1);
					}
				});
				window.localStorage.setItem("eventList", JSON.stringify(todoListArr));
				state.eventList = todoListArr;
			}
		},
		updateFilterStatus: (state, action) => {
			state.filterStatus = action.payload;
		},
	},
});

export const { addEvent, updateEvent, deleteEvent, updateFilterStatus } =
	eventSlice.actions;
export default eventSlice.reducer;
