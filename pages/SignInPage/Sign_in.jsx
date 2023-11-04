import React from "react";
import "./Sign_in.css";
import logo from "../../public/Images/signIn_logo.png";

export default function Sign_in() {
  const signIn = async () => {
    const email = document.getElementById("email_Inpt").value;
    const password = document.getElementById("pass_Inpt").value;
    const header = {
      "Content-type": "application/json",
    };
    const body = {
      email: email,
      password: password,
    };

    const response = await fetch("http://192.168.248.100:2222/login", {
      method: "GET",
      headers: header,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);

    if (data.status) {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }

    return data;
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
              <input id="email_Inpt" />
            </div>

            <div className="pass_inpt_div">
              <label htmlFor="pass_Inpt" className="pass_inpt_lbl">
                Password :
              </label>
              <input id="pass_Inpt" />
            </div>

            <div className="signin_btn_div">
              <button className="signin_btn">Sign In</button>
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
