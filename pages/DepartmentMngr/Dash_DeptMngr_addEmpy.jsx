import React from "react";
import "./Dash_DeptMngr_addEmpy.css";
import Nav from "../../components/DepartmentManager/Nav_add_emp";
import Add_Request from "../../components/DepartmentManager/Add_employee";

export default function Dash_StnMngr() {
	return (
		<div className="main_d_DeptEmpy_dash">
			<div className="d_for_Nav_DeptEmpy">
				<Nav />
			</div>
			<div className="d_for_addEmp_DeptEmpy">
				<Add_Request />
			</div>
		</div>
	);
}
