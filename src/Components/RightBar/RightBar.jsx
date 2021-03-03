import React from 'react'
import './RightBar.css'

function RightBar({noteSelected, setNoteSelected, notes, setNotes}) {

    

    function submitHandler(e) {
        e.preventDefault();
        setNotes(notes.map(note => {
            if (note.id === noteSelected.id) {
                return {
                    ...note, title: noteSelected.title,
                    text : noteSelected.text
                }
            }
            return note
        }))
        
    }

    function textHandler(e) {
        setNoteSelected({...noteSelected, text:e})
    }
    
    function titleHandler(e) {
        setNoteSelected({...noteSelected, title:e})
    }


    return (
        <div className="right-bar">
            <div className="right-bar-header">
                
            </div>
            <form id="save-form"
                onSubmit={(e) => submitHandler(e)}
                className="right-bar-content">
                <div className="content-title">
                    <input
                        value = {noteSelected.title}
                        onChange = {(e) => titleHandler(e.target.value)}
                        placeholder="Title" autoFocus />
                </div>
                <div className="content-text">
                    <textarea
                        value = {noteSelected.text}
                        onChange = {(e) => textHandler(e.target.value)}
                        placeholder="Start writing here" />
                </div>
            </form>
            <div className="right-bar-footer">
                <div className="add-tag">
                    <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4a2 2 0 0 0-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81a6 6 0 0 1 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6c.53 0 1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41c0-.53-.21-1.04-.59-1.42M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7M10 19H7v3H5v-3H2v-2h3v-3h2v3h3v2z" fill="currentColor"></path></svg>
                    <input placeholder="add tag" />
                </div>
                <button form="save-form" type="submit">SAVE</button>
            </div>
        </div>
    )
}

export default RightBar