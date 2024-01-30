import * as React from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SinglePage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [id]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });
  return (
    <div className='div'>
      <button className='back' onClick={goBack}>
        Go Back
      </button>
      {/* Bad approach */}
      <button className='back' onClick={goHome}>
        Go Home
      </button>
      {posts && (
        <div className='post'>
          <h4>{posts.title}</h4>
          <p>{posts.body}</p>
        </div>
      )}
      <NavLink to={`/blog/${id}/edit`}>Edit Post</NavLink>
    </div>
  );
};
