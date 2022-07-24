import React, {useState} from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';

function IntervalHookCounter() {

    const [count,setCount] = useState(0)

    //Here tick function only depends on count and thus this will change only when count will change.
    const tick = useCallback(() => { 
        setCount(count+1)
    },[count])

    useEffect(() => {
        const interval = setInterval(tick,1000)

        return () =>{
            clearInterval(interval)
        }
    },[count,tick])  


    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter