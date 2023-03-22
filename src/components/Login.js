import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/common";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/loginRegistrationSlice";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const submitLogin = () => {
		dispatch(
			loginUser({
				email,
				password,
			})
		);
	};

	return (
		<div className="auth-form-container">
			<form className="login-form" onSubmit={() => submitLogin()}>
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
