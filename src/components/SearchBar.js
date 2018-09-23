import React from 'react'

const SearchBar = props => {
	return (
		<div style={styles.contentSearch}>
			<div style={styles.inputSearch}>
				<input type="text" 
				onChange={props.onChangeSearch}
				/>
			</div>
		</div>
	)
}

const styles = {
	inputSearch: {
		width: 400,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		display: "flex"
	},
	contentSearch: {
		backgroundColor: "red",
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		display: "flex"
	}
}

export default SearchBar