import React, { useState } from "react";
import "./Add_Item.css";

export default function Add_Item() {

	const handleAdd=()=>{
		
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
					<select id="catg_dd" className="catg_dd_select_signin">
						<option value="" className="slct_ctg_opt">
							--Select Categories--
						</option>
						<option
							value="Project Materials"
							className="slct_ctg_opt"
							// onClick={ShowCatg1}
						>
							Project Materials
						</option>
						<option
							value="Writting Materials"
							className="slct_ctg_opt"
							// onClick={ShowCatg2}
						>
							Writting Materials
						</option>
						<option
							value="Study Materials"
							className="slct_ctg_opt"
							// onClick={ShowCatg3}
						>
							Study Materials
						</option>
						<option
							value="Electrical Items"
							className="slct_ctg_opt"
							// onClick={ShowCatg4}
						>
							Electrical Items
						</option>
						<option
							value="Miscellaneous"
							className="slct_ctg_opt"
							// onClick={ShowCatg5}
						>
							Miscellaneous
						</option>
					</select>
				</div>

				<div className="input">
					<label>
						<b>Item Name :</b>
					</label>
					<input value="" className="itm_nam_inpt" />
				</div>

				<div className="input">
					<label>
						<b>Item Price :</b>
					</label>
					<input value="" className="itm_price_inpt" />
				</div>

				<div className="button">
					<button onClick={handleAdd}>Add</button>
				</div>
			</div>
		</div>
	);
}
