import React from 'react'
import Navbar from '../components/navbar';
import ReportStatus from '../components/ReportStatus';

const Report = () => {
  return (
    <>
      <div className='flex'>
        <Navbar/>
<<<<<<< HEAD
        <div className=' w-[100px] h-[100vh]'></div>
        <div className=' bg-gray-100 h-max w-[100vw] mx-30'>
        <ReportStatus/>
=======
        <div className='flex-1 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen pl-16'> 
          <div className='container mx-auto px-4 pt-4 shadow-lg rounded-lg bg-white/80'>
            <div className='border-l-4 border-indigo-500 p-4'> 
              <ReportStatus/>
            </div>
          </div>
>>>>>>> 46a76540f831a025b424bd6a4001a15baaebc3d1
        </div>
      </div>
    </>
  )
}

export default Report
