import React, { useEffect, useState, useContext } from 'react'


const User = (props) => {
  if (true)
  {
      throw new Error("custom error");
  }
  return (
    <>
      <p>User Error Boundries</p>
    </>
  )
}

export default User 

