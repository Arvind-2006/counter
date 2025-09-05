import React,{ useState } from 'react'
function Counter(){

    const [count,setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }
    const reset = () =>{
        setCount(0);
    }
    const decrement = () =>{
        setCount(count-1);
    }

    return(
        <div className='display-screen'>
            <p className='count-display'>{count}</p>
            <div className="button">
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            
            
        </div>
    )
}
export default Counter