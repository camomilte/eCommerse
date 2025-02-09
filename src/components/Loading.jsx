import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center my-5'>
        <div className="spinner-border my-5 text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loading
