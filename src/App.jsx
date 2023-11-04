import { useState } from "react";
import "./App.css";
import Signin from "../pages/SignInPage/Sign_in";
import Add_emp from "../components/DepartmentManager/Add_employee";
import Add_Item from "../components/StationaryManager/Add_Item";
import Reque_Item from "../components/StationaryManager/RequePage";
import Nav_addEmp from "../components/DepartmentManager/Nav_add_emp";
import Nav_smd from "../components/StationaryManager/Navbar_Dash_StnMngr";
import Dash_StnMngr_AddI from "../pages/StationaryMngr/Dash_StnMngr_addItm";
import Dash_DeptMngr_AddEmpy from "../pages/DepartmentMngr/Dash_DeptMngr_addEmpy";
import Dash_StnMngr_Reque from "../pages/StationaryMngr/Dash_StnMngr_request";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BranchWorker from "../pages/BranchWorker/BranchWorker";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Signin />} />
					<Route exact path="/add_emp" element={<Add_emp />} />
					<Route exact path="/add_item" element={<Add_Item />} />
					<Route exact path="/branch-worker" element={<BranchWorker />} />
					<Route exact path="/reque_item" element={<Reque_Item />} />
					<Route exact path="/nav_smd" element={<Nav_smd />} />
					<Route exact path="/nav_addEmp" element={<Nav_addEmp />} />
					<Route
						exact
						path="/request/addItem"
						element={<Dash_StnMngr_AddI />}
					/>
					<Route
						exact
						path="/request/request"
						element={<Dash_StnMngr_Reque />}
					/>
<<<<<<< HEAD
					<Route
						exact
						path="/DeptMngr/AddEmpy"
						element={<Dash_DeptMngr_AddEmpy />}
					/>
=======
					
>>>>>>> 1e5dd510810b976ecad3acf835f52aaa43c0fd9e
				</Routes>
			</Router>
		</div>
	);
}

export default App;
