import React from "react";
import { useState } from 'react'

const MyHeader = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("button clicked");
        setCount(count + 1);
    }

    return (
        <>

            <button className="my-button" onClick={handleClick} >Conteo {count}</button>
        </>
    );
}

export default MyHeader;