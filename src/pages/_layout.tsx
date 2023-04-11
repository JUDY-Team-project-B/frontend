import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
