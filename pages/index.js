import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Listgrid from "../components/Listgrid";
import Search from "../components/Search";
import Filters from "../components/Filters";
const index = () => {
	const [filterList, setFilterList] = useState([
		"Categories",
		"Locations",
		"Ratings",
	]);
	return (
		<main className="">
			<section className="hero">
				<Navbar />
				<Header />
			</section>
			<section className="page-content">
				<aside className="aside">
					<Search />
					{filterList.map((filter, id) => {
						return <Filters key={id} title={filter} />;
					})}
				</aside>
				<section className="results">
					<Listgrid />
				</section>
			</section>
		</main>
	);
};

export default index;
