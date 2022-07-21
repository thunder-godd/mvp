import Link from "next/link";
import React from "react";
const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="about">
					<div className="logo">
						<span className="mvp-logo">MVP</span>
						<span>Easy Directories</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.{" "}
					</p>
				</div>
				<div className="company">
					<h6>Company</h6>
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
					</ul>
				</div>
				<div className="quick-links">
					<h6>Quick Links</h6>
					<ul className="nav-list">
						<li>
							<Link href="Home">Pricing</Link>
						</li>
						<li>
							<Link href="">Content</Link>
						</li>
						<li>
							<Link href="">Support</Link>
						</li>
						<li>
							<Link href="">About</Link>
						</li>
					</ul>
				</div>
				<div className="contact">
					<h6>Contact</h6>
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
					</ul>
				</div>
			</div>
			<footer>COPYRIGHT 2022 MVP</footer>
		</>
	);
};

export default Footer;
