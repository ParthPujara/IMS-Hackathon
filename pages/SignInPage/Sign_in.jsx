import React, { useState } from "react";
import "./Sign_in.css";
import logo from "../../public/Images/signIn_logo.png";
import { useNavigate } from "react-router-dom";

export default function Sign_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const navigate = useNavigate();



  const signIn = async () => {
    const header = {
      "Content-type": "application/json",
    };
    const body = {
      email: email,
      password: password,
    };

    const response = await fetch("http://192.168.248.100:2222/login", {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "true") {
		if(data.role == "employee")
		navigate("/branch-worker");
    //   alert("Login Successful");
    } else {
      alert("Login Failed");
    }

  };

  return (
    <div>
      <div className="Main_Div_Signin">
        <div className="Main_div2_Signin">
          <div className="Div1_Signin">
            <h1 className="SignIn_h1">Sign In</h1>
            <p className="p1_Div1_Signin">Provide your Email and Password</p>

            <div className="email_inpt_div">
              <label htmlFor="email_Inpt" className="email_inpt_lbl">
                Email Id :
              </label>
              <input
                id="email_Inpt"
                type="email"
                autoComplete="off"
                required={true}
                minLength={8}
                maxLength={16}
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                title="Invalid Email"
                placeholder="Enter Email"
				onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="pass_inpt_div">
              <label htmlFor="pass_Inpt" className="pass_inpt_lbl">
                Password :
              </label>
              <input
                id="pass_Inpt"
				placeholder="Enter password"
                type="password"
                autoComplete="off"
                required={true}
                minLength={8}
                maxLength={16}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
				onChange={(e) => setPassword(e.target.value)}
			  	/>
            </div>

            <div className="signin_btn_div">
              <button
                className="signin_btn"
                onClick={() => {
                  if (email !== "" && password !== "") signIn();
                  else alert("Please Enter Email and Password");
                }}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="Div2_Signin">
            <img className="logo_img_signin" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
}
