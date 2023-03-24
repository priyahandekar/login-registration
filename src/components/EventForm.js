import React, { useState } from "react";
import toast from "react-hot-toast";
import InputField from "../microComponents/InputField";
import { addEvent, updateEvent } from "../slices/eventSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validateEmail, validatePassword } from "../utils/common";

const EventForm = ({ type, eventDetails = {}, visible, closeModal }) => {
	const { eventName = "", description = "", acceptConditions } = eventDetails;
	const { id } = useParams();

	const dispatch = useDispatch();
	const [inputFields, setInputFields] = useState({
		eventName: eventName || "",
		description: description || "",
		eventDate: eventDetails?.eventDate || "",
		bookingType: eventDetails?.bookingType || "",
		acceptConditions: acceptConditions || false,
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
		if (type === "edit") {
			if (
				eventDetails?.eventName !== inputFields?.eventName ||
				eventDetails.description !== inputFields?.description ||
				eventDetails?.eventDate !== inputFields?.eventDate ||
				eventDetails?.bookingType !== inputFields?.bookingType ||
				eventDetails?.acceptConditions !== inputFields?.acceptConditions ||
				eventDetails?.price !== inputFields?.price
			) {
				dispatch(
					updateEvent({
						...eventDetails,
						eventName: inputFields?.eventName,
						description: inputFields?.description,
						eventDate: inputFields?.eventDate,
						bookingType: inputFields?.bookingType,
						acceptConditions: inputFields?.acceptConditions,
						price: inputFields?.price,
					})
				);
				toast.success("Event Updated successfully");
			} else {
				toast.error("No changes made");
				return;
			}
		}
		closeModal();
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
				<label htmlFor="eventDate">Event Date : </label>
				<InputField
					type="date"
					placeholder="Select Date"
					defaultValue={inputFields.eventDate}
					onChange={(e) => handleChange(e.target.value, "eventDate")}
				/>
				<label htmlFor="description">Description : </label>
				<InputField
					type="text"
					placeholder="Enter Description"
					defaultValue={inputFields.description}
					onChange={(e) => handleChange(e.target.value, "description")}
				/>
				<label htmlFor="price">Event Price : </label>
				<InputField
					type="number"
					placeholder="Enter Price"
					defaultValue={inputFields.price}
					onChange={(e) => handleChange(e.target.value, "price")}
				/>
				<label htmlFor="bookingType">Type of booking : </label>
				<div
					className="radio"
					onChange={(e) => {
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
				<div style={{ display: "flex" }}>
					<InputField
						type="checkbox"
						defaultChecked={inputFields.acceptConditions}
						onChange={(e) => handleChange(e.target.checked, "acceptConditions")}
					/>
					<label htmlFor="conditions" style={{ marginLeft: "2px" }}>
						I accept Terms and conditions
					</label>
				</div>
				<div className="submit-cancel">
					<button
						className="submit"
						type="submit"
						disabled={!inputFields.acceptConditions}
					>
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
