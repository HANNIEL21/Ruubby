import React from 'react';
import { SharedLayout } from '../../Export';
import { Outlet } from 'react-router-dom';

const Property = () => {
  return (
    <div>
      <SharedLayout>
        <Outlet />
      </SharedLayout>
    </div>
  )
}

export default Property