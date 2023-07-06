import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <h1 className='text-4xl font-bold'>Product Not Found!</h1>
      <h2 className='font-extralight animate-pulse'>Please Try Again</h2>
    </div>
  )
}

export default NotFound