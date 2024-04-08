import React from 'react'
import "./inputUser.css"
export const InputUser = ({labelName = "", type = "text" , ...prop}) => {
    return (
        <label className='InputUser'>
            <span>{labelName}</span>
            <input type={type} required placeholder='i' {...prop}/>
        </label>
    )
}
