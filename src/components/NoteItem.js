import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index"
import { MdDeleteForever, MdArchive, MdUnarchive } from "react-icons/md";
import parse from "html-react-parser";
import Button from "./Button";
import PropTypes from 'prop-types';


function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive }) {
	return (
		<li className="NoteItem">
            <Link to={`/notes/detail/${id}`} className="nav-detail-link" >
                <div className="content">
                    <p className="id">{id}</p>
                    <h3 className="title">{title}</h3>
                    <p className="createdAt">{showFormattedDate(createdAt)}</p>
                    {parse(`<p className="body">${body}</p>`)}
                    <p className="read-more">{body.length >= 150 ? "Read more..." : ""}</p>
                </div>
            </Link>

            <div className="button">
                <Button type="button" className="btn-delete" btnName={<MdDeleteForever />} onClickBtn={() => onDelete(id)}/>
                <Button type="button" className={!archived ? "btn-archive" : "btn-unarchive"} btnName={!archived ? <MdArchive /> : <MdUnarchive />} onClickBtn={() => onArchive(id)}/>
            </div>
		</li>
	);
}


NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};


export default NoteItem;
