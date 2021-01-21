import React, { Component } from "react";
import "./style/createList.scss";
import { connect } from "react-redux";
import { createNewList } from "../../actions/actions";

const mapStateToProps = (state) => {
    return {
        sessionId: state.sessionReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNewList: (sId, name, description) =>
            dispatch(createNewList(sId, name, description)),
    };
};

export class CreateList extends Component {
    state = {
        name: "",
        description: "",
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewList(
            this.props.sessionId,
            this.state.name,
            this.state.description
        );
        alert("trebalo bi razmotriti");
        this.props.history.push("/mylists");
    };

    render() {
        return (
            <div className="newList">
                <h1>Create New List</h1>
                <form className="createList" onSubmit={this.handleSubmit}>
                    <label>
                        <span>Name</span>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <span>Description</span>
                        <textarea
                            name="description"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Create</button>
                    <p>
                        (Click Create, then find your list and start adding
                        movies!)
                    </p>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
