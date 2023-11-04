import React, { useState } from "react";
import "./Add_Item.css";

export default function Add_Item() {

	const [category, setCategory] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");


	const addItem = async () => {
		const header = {
		  "Content-type": "application/json",
		};
		const body = {
		  category: category,
		  price: price,
		  name: name,
		};
	
		const response = await fetch("http://192.168.248.100:2222/login", {
		  method: "POST",
		  headers: header,
		  body: JSON.stringify(body),
		});
	
		const data = await response.json();
	
		if (data.status === "true") {
			alert("Item Added Successfully");
		}
		else
		{
			alert("Item Not Added");
		}
	}
	return (
		<div className="main_Add_item">
			<div className="d_h1_ad_item">
				<h1 className="h1_ad_item">Stationary Manager</h1>
			</div>
			<div className="main_form1">
				<div className="head">Add New Items</div>
				<br />
				<div className="input">
					<label>
						<b>Catagories :</b>
					</label>
					<select id="catg_dd" className="catg_dd_select_signin" onChange={(e)=>{setCategory(e.target.value)}}>
						<option className="slct_ctg_opt" value="" selected>
							--Select Categories--
						</option>
						<option
							value="Project Materials"
							className="slct_ctg_opt"
						>
							Project Materials
						</option>
						<option
							value="Writting Materials"
							className="slct_ctg_opt"
						>
							Writting Materials
						</option>
						<option
							value="Study Materials"
							className="slct_ctg_opt"
						>
							Study Materials
						</option>
						<option
							value="Electrical Items"
							className="slct_ctg_opt"
						>
							Electrical Items
						</option>
						<option
							value="Miscellaneous"
							className="slct_ctg_opt"
						>
							Miscellaneous
						</option>
					</select>
				</div>

				<div className="input">
					<label>
						<b>Item Name :</b>
					</label>
					<input className="itm_nam_inpt" onChange={(e)=>{setName(e.target.value)}}/>
				</div>

				<div className="input">
					<label>
						<b>Item Price :</b>
					</label>
					<input className="itm_price_inpt" onChange={(e)=>{setPrice(e.target.value)}}/>
				</div>

				<div className="button">
					<button onClick={addItem}>Add</button>
				</div>
			</div>
		</div>
	);
}
