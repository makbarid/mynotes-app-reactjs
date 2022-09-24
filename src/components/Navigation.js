import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<nav className="Navigation">
			<div className="nav-brand">
				<h1>My Notes</h1>
			</div>

			<ul className="nav-list">
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/notes/archive">ARCHIVE</Link>
				</li>
				<li>
					<Link to="/new">ADD NOTES</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
