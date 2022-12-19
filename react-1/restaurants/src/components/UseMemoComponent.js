import React, {useMemo, useState} from 'react'

function UseMemoComponent() {

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {setCountOne(countOne + 1)}
  const incrementTwo = () => {setCountTwo(countTwo + 1)}

  const isEven = useMemo(() => {
    let i = 0;
    while(i < 2000000000) i++
    return countOne % 2 === 0
  }, [countOne]) 

  return (
    <div>
      <div className='m-2'><button className='btn border' onClick={incrementOne}>Count One - {countOne}</button></div>
      <span> {isEven ? 'even' : 'odd'}</span>
      <div className='m-2'><button className='btn border' onClick={incrementTwo}>Count Two - {countTwo}</button></div>    
    </div>
  )
}

export default UseMemoComponent