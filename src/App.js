import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
	const [isLoginClicked, setIsLoginClicked] = useState(true);

	return (
		<div className="App">
			<Outlet />
			<Toaster
				position="bottom-right"
				toastOptions={{
					style: {
						fontSize: "1rem",
					},
				}}
			/>
		</div>
	);
}

export default App;
