import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
	const [isLoginClicked, setIsLoginClicked] = useState(true);

	return (
		<div className="App">
			<Outlet />
			{/* {isLoginClicked ? (
				<div>
					<Link to="/register">
						<button onClick={() => setIsLoginClicked(!isLoginClicked)}>
							Don't have an account? Register here.
						</button>
					</Link>
				</div>
			) : (
				<div>
					<Link to="/">
						<button onClick={() => setIsLoginClicked(!isLoginClicked)}>
							Already have an account? Login here.
						</button>
					</Link>
				</div>
			)} */}
		</div>
	);
}

export default App;
