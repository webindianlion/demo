import React, { useEffect, useState } from 'react'

const Count = function() {

    const [count, setCount] = useState(0);
    const [ival, setival] = useState('');
    const cival = function(event) { var ddd = event.target.value; setival(ddd) }

    useEffect(()=>{ document.title = `count is ${count}`; }, [count])

  return (<div>
    <h2 className='border-bottom'>Count</h2>

    <div>{count}</div>
    <div>{ival}</div>
    <button className='btn btn-primary m-2' onClick={() =>{setCount(count+1)}}> Increase Count by 1 </button>
    <button className='btn btn-primary m-2' onClick={() =>setCount(count-1)}> Decrease Count by 1 </button>
    <button className='btn btn-primary m-2' onClick={() =>setCount(count-count)}> Reset Count </button>
    <input value = {ival} onChange={cival} />
    </div>
  )
}

export default Count;
