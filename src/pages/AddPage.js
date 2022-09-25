import React from "react";
import AddNote from "../components/AddNote";
import { addNote } from "../utils/local-data";
import { useNavigate } from 'react-router-dom'

function AddPage() {
    const navigate = useNavigate();
    
    function onAddNoteHandler({ title, body }) {
        addNote({ title, body })
        alert("Note Added")
        navigate('/')
    }

    return(
        <section className="AddPage">
            <h2 className="title">Add Notes</h2>
            <AddNote onAddNote={onAddNoteHandler}/>
        </section>
    )
}


export default AddPage