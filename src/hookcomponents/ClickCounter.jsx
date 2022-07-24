import React, { useState } from 'react'
import { useEffect } from 'react';

function ClickCounter() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    },[count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>CLick {count} times</button>
        </div>
    )
}

export default ClickCounter