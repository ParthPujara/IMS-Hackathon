import { useState } from "react";
import "./App.css";
import Signin from "../pages/SignInPage/Sign_in";
import Add_Item from "../pages/StationaryMngr/Add_Item";
import Reque_Item from "../pages/StationaryMngr/RequePage";
import Nav_smd from "../pages/StationaryMngr/Navbar_Dash_StnMngr";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Signin />} />
					<Route exact path="/add_item" element={<Add_Item />} />
					<Route exact path="/reque_item" element={<Reque_Item />} />
					<Route exact path="/nav_smd" element={<Nav_smd />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
