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

	const [modalOpen, setModalOpen] = useState(false);
	const [eventDetails, setEvent] = useState({});
	const [type, setType] = useState("add");
	const events = useSelector((state) => state.event.eventList);
	const eventList = events?.filter((item) => item.userId === id);
	const totalPrice = eventList.reduce((acc, curr) => {
		acc = acc + curr.price;
		return acc;
	}, 0);
	const handleEdit = (eventInfo) => {
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
		<div className="event-list-container">
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
			{eventList && eventList.length > 0 && (
				<table>
					<thead>
						<th>Event Name</th>
						<th>Description</th>
						<th>Date</th>
						<th>Booking</th>
						<th>Price</th>
						<th>Actions</th>
					</thead>
					{eventList.map((event) => (
						<Event
							key={event.id}
							eventDetails={event}
							handleEdit={handleEdit}
						/>
					))}
					<div style={{ fontWeight: "600" }}>Total Price: {+totalPrice}</div>
				</table>
			)}
		</div>
	);
};

export default EventList;
