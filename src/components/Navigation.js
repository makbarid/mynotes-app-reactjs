import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdDescription, MdOutlineAdd } from "react-icons/md";

function Navigation() {
	return (
		<nav className="Navigation">
			<div className="nav-brand">
				<Link to="/">
					<h1>My Notes</h1>
				</Link>
			</div>

			<ul className="nav-list">
				<Link to="/">
					<li className="home">
						<MdHome />
					</li>
				</Link>
				<Link to="/notes/archive">
					<li className="archive">
						<MdDescription />
					</li>
				</Link>
			</ul>

			<div className="nav-add">
				<Link to="/new">
					<li className="new">
						<MdOutlineAdd />
					</li>
				</Link>
			</div>
		</nav>
	);
}

export default Navigation;
