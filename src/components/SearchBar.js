import React from "react";
import PropTypes from "prop-types";


function SearchBar({ notes, keyword, keywordChange }) {
	return (
		<div className="HeaderNote">
			{(!notes) ? (
				<div className="ArchiveNote">
					<h1 className="title">Archive</h1>
				</div>
			) : (
				<div className="ActiveNote">
					<h1 className="title">Active Notes</h1>
				</div>
			)}

			<div className="SearchBar">
				<input
					type="text"
					placeholder="Search notes..."
					value={keyword}
					onChange={(event) => keywordChange(event.target.value)}
				/>
			</div>
		</div>
	);
}


SearchBar.propTypes = {
	keyword: PropTypes.string.isRequired,
	keywordChange: PropTypes.func.isRequired,
};


export default SearchBar;
