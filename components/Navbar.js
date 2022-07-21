import React from "react";
import Link from "next/link";
const Navbar = () => {
	return (
		<div className="container nav-container">
			<div className="logo">
				<span className="mvp-logo">MVP</span>
				<span>Easy Directories</span>
			</div>
			<nav>
				<ul className="nav-list">
					<li>
						<Link href="Home">Home</Link>
					</li>
					<li>
						<Link href="">About</Link>
					</li>
					<li>
						<Link href="">Listings</Link>
					</li>
					<li>
						<Link href="">About</Link>
					</li>
					<li>
						<Link href="">Explore</Link>
					</li>
					<li>
						<Link href="">Contact Us</Link>
					</li>
				</ul>
			</nav>
			<div className="actions">
				<ul className="action-list">
					<li>
						<Link href="">Sign Up</Link>
					</li>
					<li className="list-btn">
						<Link href="">Add Listing</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
