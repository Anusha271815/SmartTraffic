import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import TrafficUpdate from '../components/Dashboard/TrafficUpdate.jsx';

function Dashboard(){
    return (
        <>
            <div className='md:flex'>
                <Navbar/>
                <div className='w-[100vw] h-[10vh] md:w-[100px] md:h-[100vh]'></div>
                <div className='h-max w-[100vw]'>
                    <TrafficUpdate/>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;