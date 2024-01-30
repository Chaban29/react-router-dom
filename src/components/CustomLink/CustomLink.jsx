import * as React from 'react';
import { NavLink, useMatch } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <NavLink
      style={{
        color: match ? '#121' : '#fff',
      }}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
};
