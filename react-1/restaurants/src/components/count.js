import React, { useEffect, useState } from 'react'

const Count = function() {

    const [count, setCount] = useState(0);
    const [ival, setival] = useState('');
    const cival = function(event) { var ddd = event.target.value; setival(ddd) }

    const [sss, setSss ] = useState({base:"aaa"}); 
    const fdata = async () => {
      console.log(sss) 
      let uurl = `https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=a59df72c65da505a0c282725e9a307c7`;
      let dataa = await fetch(uurl);
       dataa = await dataa.json();
      setSss(dataa)
      console.log(sss)
    }

    useEffect(()=>{ document.title = `count is ${count}`; console.log('sssss') }, [count])
    useEffect(()=>{ document.title = `count is ${count}`; console.log('sssss') }, [count])

  return (<div>
    <div>{count}</div>
    <div>{ival}</div>
    <button className='btn btn-primary m-2' onClick={() =>{setCount(count+1)}}> Increase Count by 1 </button>
    <button className='btn btn-primary m-2' onClick={() =>setCount(count-1)}> Decrease Count by 1 </button>
    <button className='btn btn-primary m-2' onClick={() =>setCount(count-count)}> Reset Count </button>
    <input value = {ival} onChange={cival} />
    <p onClick={fdata}>click</p>
    </div>
  )
}

export default Count;
