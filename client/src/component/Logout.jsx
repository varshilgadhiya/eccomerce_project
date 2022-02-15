import React from 'react'

const Logout = () => {
    localStorage.clear()
    window.location = "/"
  return (
    <div>Logout</div>
  )
}

export default Logout