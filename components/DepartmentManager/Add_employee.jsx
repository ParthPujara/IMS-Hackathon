import React, { useState,useEffect } from "react";
import "./Add_employee.css";

export default function Add_employee() {
	
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [contact, setContact] = useState("");
	const [department, setDepartment] = useState("");

	const [dept,setDept] = useState([]);
	
	const handleSubmit=async()=>{
		const header = {
			"Content-type": "application/json",
		  };
		  const body = {
			name:name,
			email: email,
			password: password,
			contact:contact,
			departmentId:department,
		  };
	  
		  const response = await fetch("http://localhost:2222/addEmp", {
			method: "POST",
			headers: header,
			body: JSON.stringify(body),
		  });
	  
		  const data = await response.json();
		//   console.log(data);
	  
		  if (data.status === "true") {	
			alert("Employee Added Successfully");
		  }
	}

	const getDept = async () => {
		const header = {
			"Content-type": "application/json",
		};
		const response = await fetch("http://localhost:2222/getDept", {
			method: "GET",
			headers: header,
		});

		const data = await response.json();
		setDept(data.data);
		console.log(data);
	};

	useEffect(() => {
		getDept();
	},[]);

	return (
		<div>
			<div className="Main_Div_Add_emp">
				<div className="Main_div2_Add_emp">
					<div className="Div1_Add_emp">
						<h1 className="Add_emp_h1">Add Employee</h1>
						<p className="p1_Div1_Add_emp">Provide your Email and Password</p>

						<div className="name_inpt_div_add_emp">
							<label htmlFor="name_Inpt" className="name_inpt_lbl_add_emp" onChange={(e) => setName(e.target.value)}>
								Name :
							</label>
							<input id="name_Inpt_add_emp" />
						</div>

						<div className="email_inpt_div_add_emp">
							<label htmlFor="email_Inpt" className="email_inpt_lbl_add_emp" onChange={(e) => setEmail(e.target.value)}>
								Email Id :
							</label>
							<input id="email_Inpt_add_emp" />
						</div>

						<div className="pass_inpt_div_add_emp">
							<label htmlFor="pass_Inpt" className="pass_inpt_lbl_add_emp" onChange={(e) => setPassword(e.target.value)}>
								Password :
							</label>
							<input id="pass_Inpt_add_emp" />
						</div>

						<div className="contc_inpt_div_add_emp">
							<label htmlFor="contc_Inpt" className="contc_inpt_lbl_add_emp" onChange={(e) => setContact(e.target.value)}>
								Contact :
							</label>
							<input id="contc_Inpt_add_emp" />
						</div>

						<div className="dept_inpt_div_add_emp">
							<label htmlFor="dept_Inpt" className="dept_inpt_lbl_add_emp">
								Department :
							</label>
							<select id="dept_dd" className="dept_dd_select_signin" onChange={(e) => setDepartment(e.target.value)}>
								<option value="" className="slct_dept_opt" onChange={(e) => setDepartment(e.target.value)}>
									--Select Department--
								</option>
								{dept.map((d)=>{
									return <option value={d._id} className="slct_dept_opt">{d.name}</option> 
								})}
							</select>
						</div>

						<div className="add_emp_btn_div">
							<button className="add_emp_btn" onClick={handleSubmit}>Sign In</button>
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
