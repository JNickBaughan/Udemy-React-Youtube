import React from 'react';

const SearchBar = (props) => {

const onVideoSelect = (event) => {
	props.onFilterChange(event.target.value);
}

	return (
		<div className="search-bar">
			<input onChange={onVideoSelect} />
		</div>
	);
};

export default SearchBar;