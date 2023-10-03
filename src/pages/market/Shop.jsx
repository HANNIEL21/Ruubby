import React from 'react';
import SharedLayout from '../SharedLayout';
import { Outlet } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <SharedLayout>
                <Outlet />
            </SharedLayout>
        </div>
    )
}

export default Shop