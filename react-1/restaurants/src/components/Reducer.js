import React, {useReducer} from "react";


const Reducer =  function(){

const initialState = 0
const reduce = function(state, action){
    switch(action){
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return 0;
        default: return state;
    }
}
    const  [count, dispatch] = useReducer(reduce, initialState)

    return(
        <>
            <h2>{count}</h2>
            <button className="btn btn-primary m-2" onClick={() => dispatch('increment')}>Increment</button>
            <button className="btn btn-primary m-2" onClick={() => dispatch('decrement')}>Decrement</button>
            <button className="btn btn-primary m-2" onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}

export default Reducer;