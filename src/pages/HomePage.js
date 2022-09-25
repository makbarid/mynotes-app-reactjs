import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { deleteNote, archiveNote, getActiveNotes } from "../utils/local-data";

function HomePageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get("keyword");
	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	return (
		<HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
	);
}

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getActiveNotes(),
			keyword: props.defaultKeyword || '',
		};
	}

	onDeleteHandler(id) {
		const confirm = window.confirm("Delete Note?");
		confirm ? deleteNote(id) : this.setState({ notes: getActiveNotes() });

		this.setState({ notes: getActiveNotes() });
	}

	onArchiveHandler(id) {
		archiveNote(id);
		this.setState({ notes: getActiveNotes() });
		alert("Note moved to Archive");
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
			<section className="HomePage">
				<SearchBar
					notes={filteredNotes}
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

export default HomePageWrapper;
