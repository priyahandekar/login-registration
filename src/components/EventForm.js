import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { addEvent } from "../slices/eventSlice";
import { useDispatch } from "react-redux";
import { validateEmail, validatePassword } from "../utils/common";

const EventForm = ({ type = "add", eventDetails = {}, visible }) => {
	const { eventName = "", description = "" } = eventDetails;
	console.log("eventform", eventName, description, eventDetails);

	const dispatch = useDispatch();
	const [inputFields, setInputFields] = useState({
		eventName: eventName || "",
		description: description || "",
		eventDate: eventDetails?.eventDate || "",
		bookingType: eventDetails?.bookingType || "",
		acceptConditions: eventDetails?.acceptConditions || false,
		price: eventDetails?.price || "",
	});

	const submitEvent = (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (type === "add") {
			dispatch(addEvent(inputFields));
		}
		console.log(inputFields);
	};

	const handleChange = (value, field) => {
		setInputFields({ ...inputFields, [field]: value });
	};

	return (
		<div className="auth-form-container">
			<form className="register-form" onSubmit={(e) => submitEvent(e)}>
				<>
					<label>
						Event Name :
						<InputField
							type="text"
							placeholder="Enter Name"
							defaultValue={inputFields.eventName}
							onChange={(e) => handleChange(e.target.value, "eventName")}
						/>
					</label>
				</>
				<>
					<label>
						Event Date:{" "}
						<InputField
							type="date"
							placeholder="Select Date"
							defaultValue={inputFields.eventDate}
							onChange={(e) => handleChange(e.target.value, "eventDate")}
						/>
					</label>
				</>
				<>
					<label>
						Description :
						<InputField
							type="text"
							placeholder="Enter Description"
							defaultValue={inputFields.description}
							onChange={(e) => handleChange(e.target.value, "description")}
						/>
					</label>
				</>
				<>
					<label>
						Event Price :
						<InputField
							type="number"
							placeholder="Enter Price"
							defaultValue={inputFields.price}
							onChange={(e) => handleChange(e.target.value, "price")}
						/>
					</label>
				</>
				<>
					<label>
						Type of booking :
						<div
							onChange={(e) => {
								console.log(e.target.value);
								handleChange(e.target.value, "bookingType");
							}}
						>
							<input
								type="radio"
								value="normal"
								name="booking"
								checked={inputFields.bookingType === "normal"}
							/>{" "}
							Normal Booking
							<input
								type="radio"
								value="premium"
								name="booking"
								checked={inputFields.bookingType === "premium"}
							/>{" "}
							Premium Booking
						</div>
					</label>
				</>
				<>
					<label>
						I accept Terms and conditions :
						<InputField
							type="checkbox"
							checked={inputFields.acceptConditions}
							onChange={(e) =>
								handleChange(e.target.checked, "acceptConditions")
							}
						/>
					</label>
				</>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	);
};

export default EventForm;
