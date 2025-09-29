import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import TrafficUpdate from '../components/Dashboard/TrafficUpdate.jsx';

function Dashboard(){
    return (
        <>
            <div className='md:flex'>
                <Navbar/>
<<<<<<< HEAD
                <div className='w-[100px] h-[100vh]'></div>
                <div className='h-max w-[100vw] mx-30'>
=======
                <div className='w-[100vw] h-[10vh] md:w-[100px] md:h-[100vh]'></div>
                <div className='h-max w-[100vw]'>
>>>>>>> 46a76540f831a025b424bd6a4001a15baaebc3d1
                    <TrafficUpdate/>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;