import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Blogpage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	})

	return (
		<div>
			<h1>Blogpage</h1>
			{
				posts.map(post => (
						<Link key={post.id} to={`/posts/${post.id}`}>{/*это переход по ссылке Singlepage и он отрисовывает наш id*/}
							<li>{post.title}</li>{/*тут просто список постов*/}
						</Link>
					))
			}

		</div>
		)

}


