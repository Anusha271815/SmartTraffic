import React from 'react'
import Navbar from '../components/navbar';
import ReportStatus from '../components/ReportStatus';

const Report = () => {
  return (
    <>
      <div className='flex'>
        <Navbar/>
        <div className='flex-1 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen pl-16'> 
          <div className='container mx-auto px-4 pt-4 shadow-lg rounded-lg bg-white/80'>
            <div className='border-l-4 border-indigo-500 p-4'> 
              <ReportStatus/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Report
