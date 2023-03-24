import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import InputField from "../microComponents/InputField";
import { updateEvent, deleteEvent } from "../slices/eventSlice";
import { validateEmail, validatePassword } from "../utils/common";
import { events } from "../constants/events";

const Event = ({ key, eventDetails, handleEdit }) => {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteEvent(id));
		toast.success("Event Deleted Successfully");
	};
	const submitRegistration = (eventDetails) => {
		handleEdit(eventDetails);
	};

	return (
		<>
			<tr key={key}>
				<td data-label="Event Name">{eventDetails?.eventName}</td>
				<td data-label="Description">{eventDetails?.description}</td>
				<td data-label="Event Date">{eventDetails?.eventDate}</td>
				<td
					data-label="Booking"
					style={{
						fontWeight: eventDetails.bookingType === "premium" ? "600" : "300",
					}}
				>
					{eventDetails?.bookingType.toUpperCase()}
				</td>
				<td data-label="Price">{eventDetails?.price}</td>
				<td data-label="Actions">
					<button
						className="edit"
						onClick={() => submitRegistration(eventDetails)}
					>
						EDIT
					</button>
					<button
						className="delete"
						onClick={() => handleDelete(eventDetails.id)}
					>
						DELETE
					</button>
				</td>
			</tr>
		</>
	);
};

export default Event;
