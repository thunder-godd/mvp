import { useState } from "react";

const Filter = ({ filter }) => {
	return (
		<div className="filter">
			<input type="checkbox" />
			{filter}
		</div>
	);
};

const Filters = ({ title }) => {
	const [filters, setFilters] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
	return (
		<div className="filter-card">
			<div>{title}</div>
			<hr />
			{filters.map((filter, id) => (
				<Filter key={id} filter={filter} />
			))}
		</div>
	);
};

export default Filters;
