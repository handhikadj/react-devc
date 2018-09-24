import React from 'react'



const BlogList = ({ title, author, date, content }) => {
	return (
		<div>
			
			<h1>{title}</h1>
			<span>{author} - {date}</span>
			<h1>{content}</h1>
		</div>

	)
}

export default BlogList