import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../microComponents/InputField";
import { validateEmail, validatePassword } from "../utils/common";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/loginRegistrationSlice";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitLogin = async (e) => {
		e.stopPropagation();
		e.preventDefault();

		const userList = window.localStorage.getItem("userList");
		if (userList) {
			const userListArr = await JSON.parse(userList);
			const user = userListArr?.find((item) => item.email === email);
			if (user && user.password === password) {
				dispatch(
					loginUser({
						email,
						id: user.id,
					})
				);
				toast.success("Logged in Successfully");
				navigate(`/events/${user.id}`);
			} else {
				toast.error("Credentials are incorrect");
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
