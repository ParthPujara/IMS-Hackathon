import React from "react";
import "./Dash_StnMngr_request.css";
import Nav from "../../components/StationaryManager/Navbar_Dash_StnMngr";
import Req from "../../components/StationaryManager/RequePage";

export default function Dash_StnMngr_request() {
	return (
		<div className="main_d_req_dash">
			<div className="d_for_Nav_req">
				<Nav />
			</div>
			<div className="d_for_addR_req">
				<Req />
			</div>
		</div>
	);
}
