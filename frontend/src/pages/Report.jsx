import React from 'react'
import Navbar from '../components/navbar';
import ReportStatus from '../components/ReportStatus';

const Report = () => {
  return (
    <>
      <div className='flex'>
        <Navbar/>
        <div className=' w-[100px] h-[100vh]'></div>
        <div className=' bg-gray-100 h-max w-[100vw] mx-30'>
        <ReportStatus/>
        </div>
      </div>
    </>
  )
}

export default Report
