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

    onInputTitleHandler(e) {
        this.setState({ title: e.target.innerHTML })
    }

    onInputBodyHandler(e) {
        this.setState({ body: e.target.innerHTML })
    }

    onSubmitHandler(e) {
        e.preventDefault();

        this.props.onAddNote(this.state)
    }

	render() {
		return (
			<div className="AddNote">
				<form>
					<div
						className="add-input__title"
						data-placeholder="Add Title..."
						value={this.state.title}
						onInput={this.onInputTitleHandler.bind(this)}
						contentEditable
						required
						/>

					<div
						className="add-input__body"
						type="text"
						data-placeholder="Add Descriptions..."
						value={this.state.body}
						onInput={this.onInputBodyHandler.bind(this)}
						contentEditable
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
