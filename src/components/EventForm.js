import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { validateEmail, validatePassword } from "../utils/common";

const EventForm = () => {
	const [inputFields, setInputFields] = useState({
		eventName: "",
		description: "",
		eventDate: "",
		bookingType: "",
		acceptConditions: false,
		price: "",
	});

	const submitEvent = (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log(inputFields);
	};

	const handleChange = (value, field) => {
		setInputFields({ ...inputFields, [field]: value });
	};

	return (
		<div>
			<form onSubmit={(e) => submitEvent(e)}>
				<div className="form-container">
					<>
						<label>
							Event Name :
							<InputField
								type="text"
								placeholder="Enter Name"
								onChange={(e) => handleChange(e.target.value, "eventName")}
							/>
						</label>
					</>
					<>
						<label>
							Date:
							<InputField
								type="date"
								placeholder="Select Date"
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
								<input type="radio" value="normal" name="booking" /> Normal
								Booking
								<input type="radio" value="premium" name="booking" /> Premium
								Booking
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
				</div>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	);
};

export default EventForm;
