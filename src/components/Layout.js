import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Collection</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
