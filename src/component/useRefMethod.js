import React from 'react'


function Username(props) {
    return <h1 ref={props.myref}>some</h1>;
}

const UseRefMethod = () => {
    function clickHandler() { }
    return (

        <>
            <button onClick={clickHandler}>Change Username</button>
            <input type="text" />
            <Username />
        </>
    )
}

export default UseRefMethod
