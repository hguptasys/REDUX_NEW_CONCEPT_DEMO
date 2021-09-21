import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  Profiler,
  memo,
} from 'react'

const Index_2 = (props) => {
  const [abc, setabc] = useState()

  console.log("RENDER_HELLO")
  return (
    <div>
      <p>Index_2 : {props.data}</p>
    </div>
  )
}

export default memo(Index_2)
