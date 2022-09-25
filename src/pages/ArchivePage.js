import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import {
	deleteNote,
	unarchiveNote,
	getArchivedNotes,
} from "../utils/local-data";

function ArchivePageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get("keyword");
	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	return (
		<ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
	);
}

class ArchivePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getArchivedNotes(),
			keyword: props.defaultKeyword || '',
		};
	}

	onDeleteHandler(id) {
		const confirm = window.confirm("Delete Note?");
		confirm ? deleteNote(id) : this.setState({ notes: getArchivedNotes() });

		this.setState({ notes: getArchivedNotes() });
	}

	onArchiveHandler(id) {
		unarchiveNote(id);

		this.setState({ notes: getArchivedNotes() });
	}

	onKeywordChangeHandler(keyword) {
		this.setState({ keyword });
		this.props.keywordChange(keyword);
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
					keywordChange={this.onKeywordChangeHandler.bind(this)}
				/>

				<NoteList
					notes={filteredNotes}
					onDelete={this.onDeleteHandler.bind(this)}
					onArchive={this.onArchiveHandler.bind(this)}
				/>
			</section>
		);
	}
}

export default ArchivePageWrapper;
