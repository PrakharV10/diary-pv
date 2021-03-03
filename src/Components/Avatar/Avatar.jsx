import React from 'react'
import './Avatar.css'

function Avatar({name}) {
    return (
        <div className="avatar-detail">
            <div className="avatar-pic">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5de530f6ea103f000653df8e%2F0x0.jpg" alt="avatar" className="avatar-icon" />
            </div>
            <div className="avatar-name">
                {name}
            </div>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z"></path></svg>
        </div>
    )
}

export default Avatar
