import React, { useCallback, useState, useEffect, useMemo, memo } from 'react'
import UsecallBackChild from './UsecallBackChild'
export default function CBK() {
  const [number, setNumber] = useState({ num1: 0, num2: 0 })
  const [result, setResult] = useState(0)
  const [data, setData] = useState('')

  var useCallBackData = useCallback(()=>{
    console.log("useCallBack1")
  },[result])

 

  const mCallBack = () => {
    console.log("useCallBack2")

    setResult(number.num2 + number.num1)
  }


  return (
    <div>
      <UsecallBackChild result={result} useCallBackchild={useCallBackData} />
      <p>callBack {result}</p>
      <input
        type="text"
        onChange={(e) =>
          setNumber({ num1: +e.target.value, num2: number.num2 })
        }
      />
      <br></br>
      <input
        type="text"
        onChange={(e) =>
          setNumber({ num2: +e.target.value, num1: number.num1 })
        }
      />

      <button onClick={mCallBack}>ADD</button>
      <br />
      <input
        type="text"
        placeholder="please enter data"
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  )
}
