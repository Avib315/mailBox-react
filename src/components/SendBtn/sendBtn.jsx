import React from 'react'
import "./sendBtn.scss"
import { IoIosSend } from "react-icons/io";
export const SendBtn = (props) => {
    return (
        <button className='SendBtn' {...props}>Send <IoIosSend /> </button>
    )
}
