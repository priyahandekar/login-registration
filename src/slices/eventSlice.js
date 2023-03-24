import { createSlice } from "@reduxjs/toolkit";
import { events } from "../constants/events";

const getInitialEvents = () => {
	// window.localStorage.clear();
	// getting event list
	const localEventList = window.localStorage.getItem("eventList");
	// if event list is not empty
	if (localEventList) {
		return JSON.parse(localEventList);
	}
	window.localStorage.setItem("eventList", JSON.stringify(events));
	return [];
};

const initialValue = {
	filterStatus: "all",
	eventList: getInitialEvents(),
};

export const eventSlice = createSlice({
	name: "event",
	initialState: initialValue,
	reducers: {
		addEvent: (state, action) => {
			state.eventList.push(action.payload);
			const eventList = window.localStorage.getItem("eventList");
			if (eventList) {
				const eventListArr = JSON.parse(eventList);
				eventListArr.push({
					...action.payload,
				});
				window.localStorage.setItem("eventList", JSON.stringify(eventListArr));
			} else {
				window.localStorage.setItem(
					"eventList",
					JSON.stringify([
						{
							...action.payload,
						},
					])
				);
			}
		},
		updateEvent: (state, action) => {
			const eventList = window.localStorage.getItem("eventList");
			if (eventList) {
				const eventListArr = JSON.parse(eventList);
				eventListArr.forEach((event) => {
					if (event.id === action.payload.id) {
						event.eventName = action.payload.eventName;
						event.description = action.payload.description;
						event.eventDate = action.payload.eventDate;
						event.bookingType = action.payload.bookingType;
						event.acceptConditions = action.payload.acceptConditions;
						event.price = action.payload.price;
					}
				});
				window.localStorage.setItem("eventList", JSON.stringify(eventListArr));
				state.eventList = [...eventListArr];
			}
		},
		deleteEvent: (state, action) => {
			const eventList = window.localStorage.getItem("eventList");
			if (eventList) {
				const eventListArr = JSON.parse(eventList);
				eventListArr.forEach((event, index) => {
					if (event.id === action.payload) {
						eventListArr.splice(index, 1);
					}
				});
				window.localStorage.setItem("eventList", JSON.stringify(eventListArr));
				state.eventList = eventListArr;
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
