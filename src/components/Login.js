import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import {validateEmail, validatePassword} from "../utils/common";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitLogin = () => {

    }

    return (
        <div>
            <form onSubmit={() => submitLogin()}>
                <InputField type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <InputField type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login;