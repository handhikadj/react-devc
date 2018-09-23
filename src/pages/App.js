import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'
import API_DATA from '../data/JsonApi.js'

class App extends Component 
{
	constructor() {
		super()

		this.state = {
			loading: true,
			search: "",
			blogs: []
		}
	}

	handleTypeSearch = event => {
		const blogFiltered = this.state.blogs.filter(
			blog => blog.title.toLowerCase().indexOf(event.target.value)
		)

		this.setState({ blogFiltered })
	}

	componentDidMount() {
		return fetch(API_DATA)
		.then(res => res.json())
		.then(res => this.setState({
			blogs: res,
			blogFiltered: res,
			loading: false
		}) )
	}

	render() {
		if (this.state.loading) {
			return (
				<h1>Loading</h1>
			)
		}

		return (
			<div style={styles.container}>
				<div style={styles.innerContainer}>
					<SearchBar 
					value={this.state.search}
					onChangeSearch={this.handleTypeSearch}
					/>

					{
						this.state.blogs.map((blog, index) => (
							<BlogList
							key={index}
							author={blog.author}
							date={blog.created_at}
							title={blog.title}
							content={blog.content}
							/>
						))
					}
				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		width: "100%",
		display: "flex",
		"flexDirection": "column",
		"alignItems": "center",
		"justifyContent": "center"
	},
	"innerContainer": {
		background: "yellowgreen",
		border: "5px solid cyan",
		padding: "10px",
		"borderRadius": "10px",
		width: "500px",
		display: "flex",
		"flexDirection": "column",
		"alignItems": "center",
		"justifyContent": "center"
	}
}

export default App