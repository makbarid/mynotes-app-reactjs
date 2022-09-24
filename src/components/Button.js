import React from "react"

function Button ({ type, className, onClickBtn, btnName }) {
    return (
        <button type={type} className={className} onClick={onClickBtn}>{btnName}</button>
    )
}


export default Button