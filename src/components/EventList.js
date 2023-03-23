import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import InputField from "../microComponents/InputField";

import { validateEmail, validatePassword } from "../utils/common";
import Event from "./Event";
import EventForm from "./EventForm";

const EventList = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	console.log(id, "id is here");
	const [modalOpen, setModalOpen] = useState(false);
	const [eventDetails, setEvent] = useState({});
	const [type, setType] = useState("add");
	const events = useSelector((state) => state.event.eventList);
	const eventList = events?.filter((item) => item.userId === id);
	const handleEdit = (eventInfo) => {
		console.log(eventInfo, "edit event");
		setEvent(eventInfo);
		setType("edit");
		setModalOpen(true);
	};

	const handleShowEventModal = (val) => {
		setType(val);
		setModalOpen(true);
		setEvent({});
	};

	const closeModal = () => {
		setModalOpen(false);
	};
	return (
		<div>
			<div className="add-logout">
				<div>
					<button className="add" onClick={() => handleShowEventModal("add")}>
						Add Event
					</button>
				</div>
				<div>
					<button className="logout" onClick={() => navigate(`/`)}>
						Logout
					</button>
				</div>
			</div>
			{modalOpen && (
				<EventForm
					eventDetails={eventDetails}
					type={type}
					visible={modalOpen}
					closeModal={closeModal}
				/>
			)}
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
