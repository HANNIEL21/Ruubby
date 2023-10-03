import React from 'react'
import { DashboardHeader, Sidebar } from '../../Export'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className='max-w-12xl mx-auto flex'>
            <Sidebar />

            <main className='bg-gray-100 w-full min-h-screen'>
                <DashboardHeader />
                <Outlet/>
            </main>
        </div>
    )
}

export default DashboardLayout