import React, { Component } from "react";
import "./style/addList.scss";
import Scroll from "./Scroll";
import { connect } from "react-redux";
import { createdList, addMovie } from "../../actions/actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        data: state.createdListReducer.data,
        sessionId: state.sessionReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createdList: (sId, pn) => dispatch(createdList(sId, pn)),
        addMovie: (sId, listId, movieId) =>
            dispatch(addMovie(sId, listId, movieId)),
    };
};

export class AddList extends Component {
    componentDidMount() {
        this.props.createdList(this.props.sessionId, 1);
    }

    render() {
        const { data } = this.props;

        if (data.results && data.results.length) {
            return (
                <div className="add-list">
                    <Link to="/createlist" className="linkos">
                        <p className="new-list">
                            New List{" "}
                            <span role="img" aria-label="plus">
                                ➕
                            </span>
                        </p>
                    </Link>
                    <Scroll>
                        {data.results.map((list) => {
                            return (
                                <ul key={list.id} className="listStyle">
                                    <li
                                        onClick={() =>
                                            this.props.addMovie(
                                                this.props.sessionId,
                                                list.id,
                                                this.props.movieId
                                            )
                                        }
                                    >
                                        {list.name}
                                    </li>
                                </ul>
                            );
                        })}
                    </Scroll>
                </div>
            );
        } else {
            return <h3>You don't have any list yet!</h3>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
