import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { deleteNote, archiveNote, getActiveNotes } from "../utils/local-data";

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getActiveNotes(),
			keyword: "",
		};
	}

	onDeleteHandler(id) {
		deleteNote(id);

		this.setState({ notes: getActiveNotes() });
	}

	onArchiveHandler(id) {
		archiveNote(id);

		this.setState({ notes: getActiveNotes() });
	}

	onKeywordChange(keyword) {
		this.setState({ keyword });
	}

	render() {
		const searchKey = this.state.keyword.toLocaleLowerCase();
		const filteredNotes = this.state.notes.filter((note) =>
			note.title.toLocaleLowerCase().includes(searchKey)
		);
		return (
			<section className="Homepage">
				<SearchBar
					keyword={this.state.keyword}
					keywordChange={this.onKeywordChange.bind(this)}
				/>

				<div className="active-note">
					<h1>Active Notes</h1>
				</div>

				<NoteList
					notes={filteredNotes}
					onDelete={this.onDeleteHandler.bind(this)}
					onArchive={this.onArchiveHandler.bind(this)}
				/>
			</section>
		);
	}
}

export default HomePage;
