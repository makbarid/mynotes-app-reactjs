import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
	getNote,
	deleteNote,
	archiveNote,
	unarchiveNote,
} from "../utils/local-data";
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

	onDeleteHandler(id) {
		deleteNote(id);
		this.setState({ foundedNote: getNote(id) });
		this.props.navigate("/");
	}

	onArchiveHandler(id) {
		const status = this.state.foundedNote.archived;

		if (!status) {
			archiveNote(id);
			this.setState({ foundedNote: getNote(id) });
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
						onDelete={this.onDeleteHandler.bind(this)}
						onArchive={this.onArchiveHandler.bind(this)}
					/>
				) : (
					<p>No notes found!</p>
				)}
			</section>
		);
	}
}

export default DetailPageWrapper;
