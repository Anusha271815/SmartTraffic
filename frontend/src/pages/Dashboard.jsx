import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import TrafficUpdate from '../components/Dashboard/TrafficUpdate.jsx';

function Dashboard(){
    return (
        <>
            <div className='md:flex'>
                <Navbar/>
                <div className='w-[100px] h-[100vh]'></div>
                <div className='h-max w-[100vw] mx-30'>
                    <TrafficUpdate/>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;