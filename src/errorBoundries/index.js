import React, { useEffect, useState, useContext } from 'react'
import User from './User'
import ErrorBoundries  from './ErrorBoundries'
import About from '../components/About'
const ErrorMainPageIndex = (props) => {
  
  return (
    <>
      <About/>
      <ErrorBoundries>
      <User/>
      </ErrorBoundries>
      
    </>
  )
}

export default ErrorMainPageIndex 

