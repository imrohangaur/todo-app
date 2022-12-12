import React from 'react'

function Loading() {
  return (
    <div className="spinner-border text-secondary position-absolute top-50 start-50" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Loading