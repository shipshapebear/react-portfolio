import React from 'react'

const Toaster = ({ message }) => {
    return (
        <div className='toaster-wrapper'>
            <div className={`toaster-item ${message == 'ok' ? 'success' : 'failed'}`}>
                <span className='message'>{message == 'ok' ? 'Message Sent!' : 'Sending Failed!'}</span>
                </div>
        </div>
    )
}

export default Toaster