import React from "react";
import PropTypes from 'prop-types';

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


SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};


export default SearchBar;
