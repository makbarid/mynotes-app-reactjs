import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MdArrowBack, MdEditNote } from "react-icons/md";
import PropTypes from 'prop-types';


class EditNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.notes.title,
			body: this.props.notes.body,
			limit: 30,
		};
	}
	


    onInputTitleHandler(e) {
		const limit = this.state.limit;
		
		if(e.target.value.length >= limit) {
			window.alert(`The title may not be longer than ${limit} characters.`)
		}

        this.setState({ title: e.target.value })
    }
	
    onInputBodyHandler(e) {
		this.setState({ body: e.target.value })
    }
	
    onSubmitHandler(e) {
		e.preventDefault();
		
        this.props.onEditNote(this.state)
    }

    
	render() {
		return (
			<div className="EditNote">

				<Link className="nav-home-link" to={"/"}>
					<MdArrowBack />
				</Link>

				<form>
					<label className="title-label">Title</label>
					<input 
						type="text"
						className="add-input__title"
						value={this.state.title}
						onChange={this.onInputTitleHandler.bind(this)}
						maxLength={this.state.limit}
					/>

					<label className="body-label">Descriptions</label>
					<textarea 
						type="text"
						className="add-input__body"
						value={this.state.body}
						onChange={this.onInputBodyHandler.bind(this)}
					/>

					<Button
						type="submit"
						className="btn-submit-edit"
						btnName={<MdEditNote />}
						onClickBtn={this.onSubmitHandler.bind(this)}
					/>
				</form>
				
			</div>
		);
	}
}


EditNote.propTypes = {
	title: PropTypes.string,
    body: PropTypes.string,
	onEditNote: PropTypes.func.isRequired
};

export default EditNote;
