import React, {useRef, useEffect} from 'react'

function UseRefComponent() {

    const refInput = useRef(null);

    useEffect(() => {refInput.current.focus()}, [])



  return (
    <div>
        <input ref={refInput} type="text" placeholder='Vinod' />
    </div>
  )
}

export default UseRefComponent