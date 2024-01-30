import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className='div'>
      Our News
      <>
        {posts.map((post) => (
          <NavLink key={post.id} to={`/blog/${post.id}`}>
            <li className='li'>
              <h3>{post.title}</h3>
            </li>
          </NavLink>
        ))}
      </>
      <NavLink to={`/blog/new`}>Create Post</NavLink>
    </div>
  );
};
