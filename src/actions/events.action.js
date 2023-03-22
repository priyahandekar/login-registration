export const createEvent = (payload) => {
	return {
		type: "CREATE_EVENT",
		payload,
	};
};

export const deleteEvent = (payload) => {
	return {
		type: "DELETE_EVENT",
		payload,
	};
};

export const updateEvent = (payload) => {
	return {
		type: "UPDATE_EVENT",
		payload,
	};
};
