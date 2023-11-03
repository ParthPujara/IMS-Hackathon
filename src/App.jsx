import { useState } from "react";
import "./App.css";
import Signin from "../pages/SignInPage/Sign_in";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Signin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
