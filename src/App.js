
import { useState } from 'react';
import './App.css';
import EditModal from './Components/EditModal/EditModal.jsx';
import MiddleBar from './Components/MiddleBar/MiddleBar';
import RightBar from './Components/RightBar/RightBar';
import SideBar from './Components/SideBar/SideBar';
import { tagList, noteList } from './Database';

function App() {

  const [tags, setTags] = useState(tagList);
  const [tagSelected, setTagSelected] = useState("All Notes");
  const [notes, setNotes] = useState(noteList);
  const [noteSelected, setNoteSelected] = useState(notes[0]);
  const [editModal, setEditModal] = useState(false);

  // console.log(notes)
  // console.log(noteSelected.text)

  return (
    <div className="App">
      <SideBar
        setNoteSelected ={setNoteSelected}
        setEditModal = {setEditModal}
        notes={notes}
        setNotes = {setNotes}
        tagSelected={tagSelected}
        setTagSelected = {setTagSelected}
        tags={tags}
        setTags={setTags} />
      
      <main>
        <MiddleBar
          noteSelected={noteSelected}
          setNoteSelected = {setNoteSelected}
          notes = {notes}
          tagSelected = {tagSelected}
        />
        <RightBar
          setNoteSelected={setNoteSelected}
          noteSelected={noteSelected}
          notes={notes}
          setNotes={setNotes}
          tags={tags}
        />
      </main>
      {editModal && <EditModal
        setEditModal={setEditModal}
        setTags = {setTags}
        tags={tags} />}
    </div>
  );
}

export default App;
