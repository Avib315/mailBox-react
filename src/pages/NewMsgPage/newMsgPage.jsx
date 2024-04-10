import React from 'react'
import "./newMsgPage.scss"
import { TextArea } from '../../components/TextArea/textArea'
import { SendBtn } from '../../components/SendBtn/sendBtn'
export const NewMsgPage = () => {
    return (
        <div className='NewMsgPage'>
            <div className="headerContaier">
                <h2>Send New Message</h2>
            </div>
            <div className='containerSendProps'>
                <label className='labels'> 
                    <span>To:</span>
                    <input type="text" /> </label>
                <label className='labels'> 
                    <span>Subject:</span>
                <input type="text" />
                </label > 
                <TextArea />
                <SendBtn/>
            </div>
        </div>
    )
}
