import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar_Dash_StnMngr.css";

export default function Navbar_Dash_StnMngr() {
	const navigate = useNavigate();
	const navigateToRequest = () => {
		navigate("/request/request");
	};
	const navigateToAddItm = () => {
		navigate("/request/addItem");
	};
	return (
		<div className="main_d_Nav_smd">
			<div className="d1_Nav_smd">
				<ul className="ul_Nav_smd">
					<li className="li_Nav_smd" onClick={navigateToRequest}>
						Show Request
					</li>
					<li className="li_Nav_smd" onClick={navigateToAddItm}>
						Add Items
					</li>
				</ul>
			</div>
		</div>
	);
}
