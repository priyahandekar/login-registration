import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { updateEvent, deleteEvent } from "../slices/eventSlice";
import { validateEmail, validatePassword } from "../utils/common";

const EventList = () => {
	const [inputFields, setInputFields] = useState({
		email: "",
		password: "",
		username: "",
	});
	const submitRegistration = () => {};

	const handleInput = (field, value) => {
		setInputFields({ ...inputFields, [field]: value });
	};

	return (
		<div>
			<form onSubmit={() => submitRegistration()}>
				<InputField
					type="text"
					placeholder="Enter Username"
					onChange={(e) => handleInput(e.target.value, "username")}
				/>
				<InputField
					type="email"
					placeholder="Enter Email"
					onChange={(e) => handleInput(e.target.value, "email")}
				/>
				<InputField
					type="password"
					placeholder="Enter Password"
					onChange={(e) => handleInput(e.target.value, "password")}
				/>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	);
};

export default EventList;
