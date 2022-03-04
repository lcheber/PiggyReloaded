import React from 'react'

function Total(props){
    return (
        <>
        <p>Total: {props.updateTotal()}</p>   
        </>
    )
}

export default Total;