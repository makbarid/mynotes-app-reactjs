import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

class AddNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
		};
	}

    onTitleChangeHandler(e) {
        this.setState({ title: e.target.value })
    }

    onBodyChangeHandler(e) {
        this.setState({ body: e.target.value })
    }

    onSubmitHandler(e) {
        e.preventDefault();

        this.props.onAddNote(this.state)
    }

	render() {
		return (
			<div className="AddNote">
				<form className="add-form">
					<input
						type="text"
						placeholder="Add Title..."
						value={this.state.title}
						onChange={this.onTitleChangeHandler.bind(this)}
					/>

					<textarea
						type="text"
						placeholder="Add Descriptions..."
						value={this.state.body}
						onChange={this.onBodyChangeHandler.bind(this)}
					/>

					<Button
						type="submit"
						className="btn-submit"
						btnName="ADD NOTE"
						onClickBtn={this.onSubmitHandler.bind(this)}
					/>
				</form>
			</div>
		);
	}
}


AddNote.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
	onAddNote: PropTypes.func.isRequired
};

export default AddNote;
