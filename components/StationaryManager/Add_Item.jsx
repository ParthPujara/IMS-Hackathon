import React, { useState } from "react";
import "./Add_Item.css";

export default function Add_Item() {
	const [catg1, setCatg1] = useState(true);
	const [catg2, setCatg2] = useState(false);
	const [catg3, setCatg3] = useState(false);
	const [catg4, setCatg4] = useState(false);
	const [catg5, setCatg5] = useState(false);

	const ShowCatg1 = () => {
		setCatg1(true);
		setCatg2(false);
		setCatg3(false);
		setCatg4(false);
		setCatg5(false);
	};

	const ShowCatg2 = () => {
		setCatg1(false);
		setCatg2(true);
		setCatg3(false);
		setCatg4(false);
		setCatg5(false);
	};

	const ShowCatg3 = () => {
		setCatg1(false);
		setCatg2(false);
		setCatg3(true);
		setCatg4(false);
		setCatg5(false);
	};

	const ShowCatg4 = () => {
		setCatg1(false);
		setCatg2(false);
		setCatg3(false);
		setCatg4(true);
		setCatg5(false);
	};

	const ShowCatg5 = () => {
		setCatg1(false);
		setCatg2(false);
		setCatg3(false);
		setCatg4(false);
		setCatg5(true);
	};

	return (
		<div className="main_Add_item">
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
							onClick={ShowCatg1}
						>
							Project Materials
						</option>
						<option
							value="Writting Materials"
							className="slct_ctg_opt"
							onClick={ShowCatg2}
						>
							Writting Materials
						</option>
						<option
							value="Study Materials"
							className="slct_ctg_opt"
							onClick={ShowCatg3}
						>
							Study Materials
						</option>
						<option
							value="Electrical Items"
							className="slct_ctg_opt"
							onClick={ShowCatg4}
						>
							Electrical Items
						</option>
						<option
							value="Miscellaneous"
							className="slct_ctg_opt"
							onClick={ShowCatg5}
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
					<button>Add</button>
				</div>
			</div>
		</div>
	);
}
