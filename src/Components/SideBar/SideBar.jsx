import React from 'react'
import Avatar from '../Avatar/Avatar'
import NewNote from '../NewNote/NewNote'
import './SideBar.css'

function SideBar({notes, setNotes, setTagSelected, tagSelected, tags}) {
    return (
        <div className="side-bar">
            <Avatar name="Clark Kent" />
            <NewNote
                setNotes = {setNotes}
                notes={notes} />
            <div className="side-bar-list">
                <div
                    onClick = {() => setTagSelected("All Notes")}
                    className={tagSelected === "All Notes" ? "notes n-active" : "notes"}
                >
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M4 19h9l-2 2H4c-.5 0-1.03-.21-1.41-.59C2.21 20.03 2 19.5 2 19V9h2v10M17.63 5.84C17.27 5.33 16.67 5 16 5H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c.67 0 1.27-.34 1.63-.85L22 11l-4.37-5.16z"></path></svg>
                    <div>
                        All Notes
                    </div>
                </div>
                <div className="tag-list">
                    {
                        tags.map((tag,index) => {
                            return (
                                <div
                                    onClick = {() => setTagSelected(tag)}
                                    key={index}
                                    className={tagSelected === tag ? "notes n-active" : "notes"}
                                >
                                    <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11c.67 0 1.27-.34 1.63-.85L22 12l-4.37-6.16z"></path></svg>

                                    <div>
                                        {tag}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <footer>
                Open Source Project by PV
            </footer>
        </div>
    )
}

export default SideBar
