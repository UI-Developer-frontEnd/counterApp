import { useState } from "react"
const Counter = ()=>{
    const [count,setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(count + 1)
    }
    const handleDecrement =()=>{
        setCount(count -1);
        if(count<=0){
            setCount(0)
        }
    }
    return (
        <section>
            <div className="main-container">
            <h1>COUNTER</h1> 
            <h1 className="counter">{count}</h1>
                <div className="container">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                </div>
                
            </div>
        </section>
    )
}

export default Counter