import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../microComponents/InputField";
import { updateEvent, deleteEvent } from "../slices/eventSlice";
import { validateEmail, validatePassword } from "../utils/common";
import { events } from "../constants/events";

const Event = ({ key, eventDetails, handleEdit }) => {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteEvent(id));
	};
	const submitRegistration = (eventDetails) => {
		handleEdit(eventDetails);
	};

	return (
		<>
			<tr key={key}>
				<td>{eventDetails.eventName}</td>
				<td>{eventDetails.description}</td>
				<td>{eventDetails.eventDate}</td>
				<td>{eventDetails.bookingType}</td>
				<td>
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
