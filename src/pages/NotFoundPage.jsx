import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='div'>
      Not Found 404
      <div>
        <NavLink to={'/'}>go to Home</NavLink>
      </div>
    </div>
  );
};
