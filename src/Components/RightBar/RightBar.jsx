import React, { useState } from 'react'
import SelectComp from '../SelectComp/SelectComp';
import ToastComp from '../ToastComp/ToastComp';
import './RightBar.css'

function RightBar({tags, noteSelected, setNoteSelected, notes, setNotes}) {

    const [showToast, setShowToast] = useState(false);
    const [saved, setSaved] = useState(false);
    const [localTag, setLocalTag] = useState("All Notes");
    

    function submitHandler(e) {
        e.preventDefault();
        let today = new Date();
        let edit = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        setNotes(notes.map(note => {
            if (note.id === noteSelected.id) {
                return {
                    ...note, title: noteSelected.title,
                    text: noteSelected.text,
                    edited: edit.toLocaleString(),
                    tag : localTag
                }
            }
            return note
        }))
        setSaved(true);

        setTimeout(() => {
            setSaved(false);
          }, 2500);
    }

    function textHandler(e) {
        setNoteSelected({...noteSelected, text:e})
    }
    
    function titleHandler(e) {
        setNoteSelected({...noteSelected, title:e})
    }

    function noteDeleteHandler() {
        if (notes.length > 1) {
            setNotes(notes.filter((note) => note.id !== noteSelected.id))

            if (noteSelected === notes[0])
                setNoteSelected(notes[1])
            else
                setNoteSelected(notes[0])
        } else {
            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
              }, 3000);
        }
    }


    return (
        <div className="right-bar">
            <div className="right-bar-header">
                <div className="header-upper">
                    Clark's Diary. 
                     <div onClick={noteDeleteHandler}>
                        <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" fill="currentColor"></path></svg>
                     </div>
                </div>
                <div className="header-lower">
                    Last edited on {noteSelected.edited}
                    <div>
                        (Don't forget to Save)
                    </div>
                </div>
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
                <ToastComp showToast = {saved} variant="success" message="Successfully Saved" />
            </form>
            <div className="right-bar-footer">
                <div className="add-tag">
                    <SelectComp
                        localTag={localTag}
                        setLocalTag = {setLocalTag}
                        tags={tags} />
                </div>
                <button form="save-form" type="submit">SAVE</button>
                <ToastComp showToast={showToast} variant="error" message="Notebook should have atleast one note"/>
            </div>
        </div>
    )
}

export default RightBar
