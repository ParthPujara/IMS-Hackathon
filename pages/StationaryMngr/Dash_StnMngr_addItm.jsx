import React from "react";
import "./Dash_StnMngr_addItm.css";
import Nav from "../../components/StationaryManager/Navbar_Dash_StnMngr";
import Add_Request from "../../components/StationaryManager/Add_Item";

export default function Dash_StnMngr() {
	return (
		<div className="main_d_addI_dash">
			<div className="d_for_Nav_addI">
				<Nav />
			</div>
			<div className="d_for_addR_addI">
				<Add_Request />
			</div>
		</div>
	);
}
