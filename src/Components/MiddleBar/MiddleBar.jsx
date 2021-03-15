import React from 'react'
import NoteContainer from '../NoteContainer/NoteContainer'
import './MiddleBar.css'

function MiddleBar({noteSelected, setNoteSelected, notes, tagSelected}) {
    return (
        <div className="middle-bar">
            <div className="header">
                <div className="current-tag">
                    {tagSelected}
                </div>
                <div className="note-count">
                    {notes.length === 1 ? `${notes.length}  note` : `${notes.length}  notes`}
                    {/* <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75v9.13M7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5H7.04z" fill="currentColor"></path></svg> */}
                </div>
            </div>

            <div className="notes-container">
                {
                    notes.map((note, index) => {
                        if (note.tag === tagSelected || tagSelected === "All Notes") {
                            return (
                                <div
                                    onClick = {() => setNoteSelected(note)}
                                    key={index}>
                                    <NoteContainer
                                        noteSelected = {noteSelected}
                                        note={note} />
                                </div>
                            )
                        } else {
                            return false
                        }
                    })
                }
            </div>
        </div>
    )
}

export default MiddleBar
