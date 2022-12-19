import React, {useState, useCallback} from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';



function ParentComponent() {

    const [age, setAge] = useState(25);
    const [salery, setSalery] = useState(50000)
    const incrementAge = useCallback(() => setAge(age +1), [age])
    const incrementSalery = useCallback(() => {setSalery(salery + 1000)}, [salery]) 

  return (
    <div>
        {/* <h2>ParentComponent</h2> */}
        <Title />
        <Count text = "age" count = {age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text = "salery" count = {salery} />
        <Button  handleClick={incrementSalery}>Increment Salery</Button>
    </div>
  )
}

export default ParentComponent