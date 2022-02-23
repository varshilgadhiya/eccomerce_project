import { CircularProgress } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigationbar from './Navigationbar'

const Logout = () => {
  const navigate = useNavigate()
  localStorage.clear()
  window.location = "/"
  return (
    <>
      <Navigationbar />
      <div className='text6-center my-4'><CircularProgress /></div>
    </>
  )
}

export default Logout