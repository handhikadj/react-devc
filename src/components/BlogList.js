import React from 'react'



const BlogList = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			<span>{props.author} - {props.date}</span>
			<h1>{props.content}</h1>
		</div>

	)
}

export default BlogList