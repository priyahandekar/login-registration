export const login = (payload) => {
	return {
		type: "LOGIN",
		payload,
	};
};

export const register = (payload) => {
	return {
		type: "REGISTER",
		payload,
	};
};
