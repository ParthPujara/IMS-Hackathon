import React from "react";
import "./RequePage.css";

export default function RequePage() {
	return (
		<div>
			<div className="mainDOrdrcomp1">
				<div className="FrstDOrdrC1">
					<div className="FrstD1OrdrC1">
						<h5>PENDING REQUESTS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC1">
					<div>SR NO.</div>
					<div>DEPARTMENT NAME</div>
					<div>SHOW ITEMS</div>
					<div>TOTAL NO. OF ITEMS</div>
					<div>TOTAL PRICE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC1">
					<span>No priority orders to show.</span>
				</div>
			</div>
		</div>
	);
}
