import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav_add_emp.css";

export default function Nav_add_emp() {
	const navigate = useNavigate();
	const navigateToAddEmp = () => {
		navigate("/DeptMngr/AddEmpy");
	};
	return (
		<div>
			<div className="main_d_Nav_addEmp">
				<div className="d1_Nav_addEmp">
					<ul className="ul1_Nav_addEmp">
						<li className="li_Nav_addEmp" onClick={navigateToAddEmp}>
							Add Employee
						</li>
					</ul>
					<h3 className="h3_Nav_addEmp">Requests</h3>
					<ul className="ul2_Nav_addEmp">
						<li className="li_Nav_addEmp">Requested</li>
						<li className="li_Nav_addEmp">Pending</li>
						<li className="li_Nav_addEmp">Accepted</li>
						<li className="li_Nav_addEmp">Rejected</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
