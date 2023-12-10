import {useState} from "react";

export default function Count() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={()=> setCount(prev => prev + 1)}>click me!</button>
            <h4>{count + "번 눌러졌습니다."}</h4>
        </>
    )
}