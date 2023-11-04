import React, { useEffect } from "react";
import "./Add_employee.css";

export default function Add_employee() {
	const getDept = async () => {
		const header = {
			"Content-type": "application/json",
		};
		const response = await fetch("http://192.168.248.100:2222/getDept", {
			method: "GET",
			headers: header,
		});

		const data = await response.json();
		console.log(data);
	};

	useEffect(() => {
		getDept();
	});

	return (
		<div>
			<div className="Main_Div_Add_emp">
				<div className="Main_div2_Add_emp">
					<div className="Div1_Add_emp">
						<h1 className="Add_emp_h1">Add Employee</h1>
						<p className="p1_Div1_Add_emp">Provide your Email and Password</p>

						<div className="name_inpt_div_add_emp">
							<label htmlFor="name_Inpt" className="name_inpt_lbl_add_emp">
								Name :
							</label>
							<input id="name_Inpt_add_emp" />
						</div>

						<div className="email_inpt_div_add_emp">
							<label htmlFor="email_Inpt" className="email_inpt_lbl_add_emp">
								Email Id :
							</label>
							<input id="email_Inpt_add_emp" />
						</div>

						<div className="pass_inpt_div_add_emp">
							<label htmlFor="pass_Inpt" className="pass_inpt_lbl_add_emp">
								Password :
							</label>
							<input id="pass_Inpt_add_emp" />
						</div>

						<div className="contc_inpt_div_add_emp">
							<label htmlFor="contc_Inpt" className="contc_inpt_lbl_add_emp">
								Contact :
							</label>
							<input id="contc_Inpt_add_emp" />
						</div>

						<div className="dept_inpt_div_add_emp">
							<label htmlFor="dept_Inpt" className="dept_inpt_lbl_add_emp">
								Department :
							</label>
							<select id="dept_dd" className="dept_dd_select_signin">
								<option value="" className="slct_dept_opt">
									--Select Department--
								</option>
								<option
									value="Project Materials"
									className="slct_dept_opt"
									// onClick={ShowCatg1}
								>
									Project Materials
								</option>
								<option
									value="Writting Materials"
									className="slct_dept_opt"
									// onClick={ShowCatg2}
								>
									Writting Materials
								</option>
								<option
									value="Study Materials"
									className="slct_dept_opt"
									// onClick={ShowCatg3}
								>
									Study Materials
								</option>
								<option
									value="Electrical Items"
									className="slct_dept_opt"
									// onClick={ShowCatg4}
								>
									Electrical Items
								</option>
								<option
									value="Miscellaneous"
									className="slct_dept_opt"
									// onClick={ShowCatg5}
								>
									Miscellaneous
								</option>
							</select>
						</div>

						<div className="add_emp_btn_div">
							<button className="add_emp_btn">Sign In</button>
						</div>
					</div>
					{/*<div className="Div2_Signin">
						<img className="logo_img_signin" src={logo} />
    </div>*/}
				</div>
			</div>
		</div>
	);
}
