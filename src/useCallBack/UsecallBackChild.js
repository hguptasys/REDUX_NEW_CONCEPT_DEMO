import React, { useCallback, useState, useEffect, useMemo, memo } from 'react'

function UsecallBackChild(props) {
  var { result, useCallBackchild} = props

  const dataLoad = () => {
    console.log('UsecallBackChildaskhdkas outsideEEE')

    for (var i = 0; i <= 1010; i++) {
      console.log('UsecallBackChild_3 inside')
    }
  }

  var abc = () => {
    console.log('UsecallBackChildaskhdkas outside')
    dataLoad()
  }

 



  console.log('UsecallBackChild_1')

  return (
    <div>
      <p>UsecallBackChild : {result}</p>
      <button onClick={abc}>child</button>
    </div>
  )
}

export default memo(UsecallBackChild)
