import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  Profiler,
  useMemo,
} from 'react'
import Index_2 from './index_2'

const Index_1 = (props) => {
  const [data, setdata] = useState(0)

  const increment = () => {
    console.log('inc')
    setdata(data + 1)
  }

  return (
    <div>
      <p>Index_1 : {data} </p>

      <button onClick={increment}>BUTTON</button>

      <Index_2 />
    </div>
  )
}

export default Index_1
