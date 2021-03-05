import React from 'react'
import './ToastComp.css'

function ToastComp({showToast, variant, message}) {
    return (
        <div className={showToast ? `toast-comp ${variant}` : `toast-comp hide-toast ${variant}`}>
            {/* <div className="toast-head">{variant}</div> */}
            <div className="toast-msg">{message}</div>
        </div>
    )
}

export default ToastComp
