import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive }) {
	return (
		<div className="NoteDetail">
            <div className="note-content">
                <p className="id">{id}</p>
                <h3 className="title">{title}</h3>
                <p className="createdAt">{createdAt}</p>
                <p className="body">{body}</p>
            </div>

            <div className="button">
                <Button type="button" className="btn-delete" btnName="DELETE" onClickBtn={() => onDelete(id)}/>
                <Button type="button" className="btn-archive" btnName={archived ? "Unarchive" : "Archive"} onClickBtn={() => onArchive(id)}/>
            </div>
		</div>
	);
}


export default NoteDetail;
