import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EventList from "./components/EventList";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Error from "./microComponents/Error";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Login />,
			},
			{
				path: "/events/:id",
				element: <EventList />,
			},
			// {
			// 	path: "/events",
			// 	element: <EventForm />,
			// },
			{
				path: "/register",
				element: <Registration />,
			},
		],
	},
]);

export default appRouter;
