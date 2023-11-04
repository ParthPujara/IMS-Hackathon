import { useState } from "react";
import "./App.css";
import Signin from "../pages/SignInPage/Sign_in";
import Add_Item from "../components/StationaryManager/Add_Item";
import Reque_Item from "../components/StationaryManager/RequePage";
import Nav_smd from "../components/StationaryManager/Navbar_Dash_StnMngr";
import Dash_StnMngr_AddI from "../pages/StationaryMngr/Dash_StnMngr_addItm";
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
					<Route
						exact
						path="/request/addItem"
						element={<Dash_StnMngr_AddI />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
