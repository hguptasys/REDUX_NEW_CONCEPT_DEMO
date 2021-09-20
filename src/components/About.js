import React, { useEffect, useState, useContext,useCallback } from 'react'
// import _debouce from 'lodash/debounce';

const About = (props) => {
  const [value, setValue] = useState('');


  const debounceFn = useCallback (handleDebounceFn, []);

  function handleDebounceFn(inputValue) {
    console.log("handleDebounceFn",inputValue)
}


function handleChange (event) {
  console.log("handleChange",event.target.value)
  setValue(event.target.value);
  debounceFn(event.target.value);
};

function abc (){
  console.log("abbbbcbcbcbcbcbcbcbcbcbcbcb")
}



  return (
    <>
   <input value={value} onChange={handleChange} />
      <h1>Hey this is About Page inside components folder</h1>
      
    </>
  )
}

export default About 

