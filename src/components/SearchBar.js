import React from "react";

function SearchBar({ keyword, keywordChange }) {
	return (
		<div className="SearchBar">
			<input
				type="text"
				placeholder="Search notes..."
				value={keyword}
				onChange={(event) => keywordChange(event.target.value)}
			/>
		</div>
	);
}

export default SearchBar;
