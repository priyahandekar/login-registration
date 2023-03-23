import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InputField from "../microComponents/InputField";

import { validateEmail, validatePassword } from "../utils/common";
import Event from "./Event";
import EventForm from "./EventForm";

const EventList = () => {
	const { id } = useParams();
	console.log(id, "id is here");
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [eventDetails, setEvent] = useState({});
	const events = useSelector((state) => state.event.eventList);
	const eventList = events?.filter((item) => item.userId === id);
	const handleEdit = (eventInfo) => {
		console.log(eventInfo, "edit event");
		setEvent(eventInfo);
		setUpdateModalOpen(true);
	};
	return (
		<div>
			<EventForm
				eventDetails={eventDetails}
				type="edit"
				visible={updateModalOpen}
			/>
			<table>
				<th>Event Name</th>
				<th>Description</th>
				<th>Date</th>
				<th>Booking</th>
				<th>Actions</th>
				{eventList &&
					eventList.length &&
					eventList.map((event) => (
						<Event
							key={event.id}
							eventDetails={event}
							handleEdit={handleEdit}
						/>
					))}
			</table>
		</div>
	);
};

export default EventList;
