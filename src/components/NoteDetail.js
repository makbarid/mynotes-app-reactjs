import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index"
import { MdArrowBack, MdDeleteForever, MdArchive, MdUnarchive } from "react-icons/md";
import Button from "./Button";
import PropTypes from "prop-types";
import parse from 'html-react-parser';

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive }) {
	return (
		<div className="NoteDetail">
            <div>
                <Link className="nav-home-link" to={`/`}><MdArrowBack /></Link>
            </div>
            
            <div className="content">
                <p className="id">{id}</p>
                <h3 className="title">{title}</h3>
                <p className="createdAt">{showFormattedDate(createdAt)}</p>
                {parse(`<p className="body">${body}</p>`)}
            </div>

            <div className="button">
                <Button type="button" className="btn-delete" btnName={<MdDeleteForever />} onClickBtn={() => onDelete(id)}/>
                <Button type="button" className={!archived ? "btn-archive" : "btn-unarchive"} btnName={!archived ? <MdArchive /> : <MdUnarchive />} onClickBtn={() => onArchive(id)}/>
            </div>
		</div>
	);
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};


export default NoteDetail;
