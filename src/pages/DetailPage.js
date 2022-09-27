import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";


function DetailPageWrapper() {
	const { id } = useParams();
	const navigate = useNavigate();


	return <DetailPage id={id} navigate={navigate} />;
}


class DetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			foundedNote: getNote(props.id),
		};
	}


	onEditHandler(id) {
		this.props.navigate(`/notes/detail/edit/${id}`);
	}

	onDeleteHandler(id) {
		const confirm = window.confirm("Delete Note?");

		if(confirm) {
			deleteNote(id);
			this.props.navigate("/");
		}
		this.setState({ foundedNote: getNote(id) });
	}

	onArchiveHandler(id) {
		const status = this.state.foundedNote.archived;

		if (!status) {
			archiveNote(id);
			this.setState({ foundedNote: getNote(id) });
			alert("Note moved to Archive")
		} else {
			unarchiveNote(id);
			this.setState({ foundedNote: getNote(id) });
		}
	}


	render() {
		return (
			<section className="DetailPage">
				{this.state.foundedNote ? (
					<NoteDetail
						{...this.state.foundedNote}
						onEdit={this.onEditHandler.bind(this)}
						onDelete={this.onDeleteHandler.bind(this)}
						onArchive={this.onArchiveHandler.bind(this)}
					/>
				) : (
					<p className="empty-message">No notes found!</p>
				)}
			</section>
		);
	}
}


export default DetailPageWrapper;
