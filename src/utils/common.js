export const validateEmail = (email) => {
	const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (regExp.test(email)) return true;
	else return false;
};

export const validatePassword = (password) => {
	const regExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;
	if (regExp.test(password)) return true;
	else return false;
};
