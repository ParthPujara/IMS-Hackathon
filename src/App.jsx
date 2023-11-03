import { useState } from "react";
import "./App.css";
import Signin from "../pages/SignInPage/Sign_in";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Router>
				{/*<h1>IMS Hackathon</h1>*/}
				<Routes>
					<Route exact path="/signIn" element={<Signin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
