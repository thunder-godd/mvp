import { useState } from "react";
import Listing from "./Listing";
const Listgrid = () => {
	const [listings, Setlistings] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
	return (
		<div className="list-grid">
			{listings.map((listing, id) => (
				<Listing key={id} />
			))}
		</div>
	);
};

export default Listgrid;
