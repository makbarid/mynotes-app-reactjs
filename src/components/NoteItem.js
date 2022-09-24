import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive }) {
	return (
		<li className="NoteItem">
            <div className="note-content">
                <p className="id">{id}</p>
                <h3 className="title">
                    <Link className="title-link" to={`/detail/${id}`}>{title}</Link>
                </h3>
                <p className="createdAt">{createdAt}</p>
                <p className="body">{body}</p>
            </div>

            <div className="button">
                <Button type="button" className="btn-delete" btnName="DELETE" onClickBtn={() => onDelete(id)}/>
                <Button type="button" className="btn-archive" btnName={archived ? "Unarchive" : "Archive"} onClickBtn={() => onArchive(id)}/>
            </div>
		</li>
	);
}

export default NoteItem;
