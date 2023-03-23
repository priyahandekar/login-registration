import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/common";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/loginRegistrationSlice";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorState, setErrorState] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitLogin = (e) => {
		e.stopPropagation();
		e.preventDefault();

		const userList = window.localStorage.getItem("userList");
		if (userList) {
			const userListArr = JSON.parse(userList);
			const user = userListArr.find((item) => item.email === email);
			if (user.password === password) {
				dispatch(
					loginUser({
						email,
						id: user.id,
					})
				);
				navigate(`/events/${user.id}`);
			} else {
				setErrorState(true);
			}
		}
	};

	return (
		<div className="auth-form-container">
			<form className="login-form" onSubmit={(e) => submitLogin(e)}>
				<label htmlFor="email">Email</label>
				<InputField
					type="email"
					placeholder="Enter Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password</label>

				<InputField
					type="password"
					placeholder="Enter Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
			<div>
				<Link to="/register">
					<button className="link-btn">
						Don't have an account? Register here.
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
