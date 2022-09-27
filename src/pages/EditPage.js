import React from "react";
import EditNote from "../components/EditNote";
import { useParams } from "react-router-dom";
import { editNote, getNote } from "../utils/local-data";
import { useNavigate } from 'react-router-dom'


function EditPage() {
    const { id } = useParams();
    const notes = getNote(id)
    const navigate = useNavigate();
    
    const onEditNoteHandler = ({ title, body }) => {
        editNote({ id, title, body })
        alert("Note Edited")
        navigate(`/notes/detail/${id}`)
    }

    
    return(
        <section className="EditPage">
            <h2 className="title">Edit Notes</h2>
            <EditNote onEditNote={onEditNoteHandler} notes={notes}/>
        </section>
    )
}


export default EditPage;