import React, { useCallback, useState, useEffect, useMemo} from 'react'

export default function CBK() {
  const [number, setNumber] = useState({ num1: 0, num2: 0 })
  const [result, setResult] = useState(0)
  useEffect(() => {
    console.log(number)
  }, [number, result])

  const mCallBack = useMemo(() => {
    setResult(number.num2 + number.num1)
   console.log("memo",result)
  }, [number, result])

  
  console.log('result===>', result)

  return (
    <div>
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
    </div>
  )
}
