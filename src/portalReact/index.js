import React, { useEffect, useState, useContext } from 'react'
import ReactDOM  from 'react-dom'

const ReactPortal = (props) => {
    const modalRoot = document.getElementById('react_portal');

    return  ReactDOM.createPortal(<h1>react_portal</h1>, modalRoot);
  }

export default ReactPortal 
