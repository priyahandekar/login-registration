import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { addEvent } from "../slices/eventSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validateEmail, validatePassword } from "../utils/common";

const EventForm = ({ type, eventDetails = {}, visible, closeModal }) => {
	const { eventName = "", description = "" } = eventDetails;
	console.log("eventform", eventName, description, eventDetails);
	const { id } = useParams();

	const dispatch = useDispatch();
	const [inputFields, setInputFields] = useState({
		eventName: eventName || "",
		description: description || "",
		eventDate: eventDetails?.eventDate || "",
		bookingType: eventDetails?.bookingType || "",
		acceptConditions: eventDetails?.acceptConditions || false,
		price: eventDetails?.price || "",
		id: uuidv4(),
		userId: id,
	});

	const submitEvent = (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (type === "add") {
			dispatch(addEvent(inputFields));
		}
		closeModal();
		console.log(inputFields);
	};

	const handleChange = (value, field) => {
		setInputFields({ ...inputFields, [field]: value });
	};

	return (
		<div className="auth-form-container">
			<form className="register-form" onSubmit={(e) => submitEvent(e)}>
				<label htmlFor="eventName">Event Name : </label>
				<InputField
					type="text"
					placeholder="Enter Name"
					defaultValue={inputFields.eventName}
					onChange={(e) => handleChange(e.target.value, "eventName")}
				/>
				<label htmlFor="eventName">Event Name : </label>
				<InputField
					type="date"
					placeholder="Select Date"
					defaultValue={inputFields.eventDate}
					onChange={(e) => handleChange(e.target.value, "eventDate")}
				/>
				<label htmlFor="eventName">Description : </label>
				<InputField
					type="text"
					placeholder="Enter Description"
					defaultValue={inputFields.description}
					onChange={(e) => handleChange(e.target.value, "description")}
				/>
				<label htmlFor="eventName">Event Price : </label>
				<InputField
					type="number"
					placeholder="Enter Price"
					defaultValue={inputFields.price}
					onChange={(e) => handleChange(e.target.value, "price")}
				/>
				<label htmlFor="eventName">Type of booking : </label>
				<div
					className="radio"
					onChange={(e) => {
						console.log(e.target.value);
						handleChange(e.target.value, "bookingType");
					}}
				>
					<input
						style={{ marginRight: "2px" }}
						type="radio"
						value="normal"
						name="booking"
						checked={inputFields.bookingType === "normal"}
					/>{" "}
					Normal Booking <div>&nbsp;</div>
					<input
						style={{ marginRight: "2px" }}
						type="radio"
						value="premium"
						name="booking"
						checked={inputFields.bookingType === "premium"}
					/>{" "}
					Premium Booking
				</div>
				<label htmlFor="eventName">
					I accept Terms and conditions :
					<InputField
						type="checkbox"
						checked={inputFields.acceptConditions}
						onChange={(e) => handleChange(e.target.checked, "acceptConditions")}
					/>
				</label>
				<div className="submit-cancel">
					<button className="submit" type="submit">
						SUBMIT
					</button>
					<button
						className="cancel"
						onClick={(e) => {
							e.stopPropagation();
							e.preventDefault();
							closeModal();
						}}
					>
						CANCEL
					</button>
				</div>
			</form>
		</div>
	);
};

export default EventForm;
