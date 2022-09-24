import React from "react"
import { getActiveNotes, deleteNote } from "../utils/local-data"
import NoteList from "../components/NoteList"
import SearchBar from "./SearchBar"

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getActiveNotes(),
            keyword: '',

        }
    }

    onDeleteHandler(id) {
        deleteNote(id)

        this.setState({ notes: getActiveNotes() })
    }

    onKeywordChange(keyword) {
        this.setState({ keyword })
    }

    render() {
        const searchKey = this.state.keyword.toLocaleLowerCase()
        const filteredNotes = this.state.notes.filter( (note) => note.title.toLocaleLowerCase().includes(searchKey))
        
        return (
            <aside className="Sidebar">
                <SearchBar
                keyword={this.state.keyword}
                keywordChange={this.onKeywordChange.bind(this)}
                />
                
                <NoteList
                notes={filteredNotes}
                onDelete={this.onDeleteHandler.bind(this)}
                />
            </aside>
        )
    }
}


export default Sidebar