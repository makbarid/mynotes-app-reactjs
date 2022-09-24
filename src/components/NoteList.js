import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteList({ notes, onDelete, onArchive }) {
	return (
		<div className="notes">
			{notes.length ? (
				<ul className="NoteList">
					{notes.map((note) => (
						<NoteItem
							{...note}
							key={note.id}
							id={note.id}
							onDelete={onDelete}
							onArchive={onArchive}
						/>
					))}
				</ul>
			) : (
				<p>No notes found!</p>
			)}
		</div>
	);
}


NoteList.propTypes = {
	notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};


export default NoteList;
