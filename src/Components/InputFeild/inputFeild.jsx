import React from "react";
import "./input.css"

const InputFeild = (props) => {

    const handleInputChange=(e)=>{
        props.handleInput(e)
    }

    return (
        <>
            <input type={props.type} id={props.id} placeholder={props.placeholder} onChange={handleInputChange} />
        </>
    )
}

export default InputFeild;