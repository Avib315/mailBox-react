import React from 'react'
import "./sendBtn.scss"
import { IoIosSend } from "react-icons/io";
export const SendBtn = (props) => {
    console.log(props.loading)
    return (
        <button className={`SendBtn ${props.loading&&"loadingBtn"} `} {...props}>Send <IoIosSend /> </button>
    )
}
