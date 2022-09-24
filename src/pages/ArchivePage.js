import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { deleteNote, unarchiveNote, getArchivedNotes } from "../utils/local-data";

class ArchivePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getArchivedNotes(),
			keyword: "",
		};
	}

	onDeleteHandler(id) {
		deleteNote(id);

		this.setState({ notes: getArchivedNotes() });
	}

	onArchiveHandler(id) {
        unarchiveNote(id)

        this.setState({ notes: getArchivedNotes() });
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
			<section className="ArchivePage">
				<SearchBar
					keyword={this.state.keyword}
					keywordChange={this.onKeywordChange.bind(this)}
				/>

				<div className="archive-note">
					<h1>Archive Notes</h1>
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

export default ArchivePage;
