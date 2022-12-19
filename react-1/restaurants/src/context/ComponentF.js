import React, { useContext } from 'react'
import {userContext} from '../App'

function ComponentF() {
    const user = useContext(userContext)
  return (
    <div> 
    { user } 
    
    <h2>ComponentF</h2>
    
    </div>
  )
}

export default ComponentF