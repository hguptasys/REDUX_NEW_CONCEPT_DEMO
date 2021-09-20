import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  Profiler
} from 'react'
import About from './About'

const Home = (props) => {
  const [abc, setabc] = useState()
  console.log('abc===>', abc)
  var ref = useRef()
  console.log('ref===>', ref)

  useEffect(() => {
    console.log('useEffect')
  }, [])
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    setabc('abc')
  }, [abc])


var callback =(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) =>{
  // console.log("PROFILER===>",id,phase,baseDuration,actualDuration,startTime,commitTime,interactions)
}
  return (
    <div>
      <Profiler  id="Navigation" onRender={callback}>
      <About/>
      </Profiler>
     
      <h1 className="accknlka bcjkkjjkl" style={{ color: 'green' }} ref={ref}>
        HOME
      </h1>
    </div>
  )
}

export default Home
