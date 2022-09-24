import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<section className="PageNotFound">
			<img src="/assets/404-page-not-found.webp" alt="404 - Page Not Found" />

			<Link className="back" to="/">
				<p>Back to homepage</p>
			</Link>
		</section>
	);
};

export default PageNotFound;
