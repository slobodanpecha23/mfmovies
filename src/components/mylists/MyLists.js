import React, { Component } from "react";
import { connect } from "react-redux";
import { createdList, deleteList } from "../../actions/actions";
import { Link } from "react-router-dom";
import "./style/myLists.scss";
import Paginator from "../pagination/Paginator";

const mapStateToProps = (state) => {
    return {
        data: state.createdListReducer.data,
        sessionId: state.sessionReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createdList: (sId, pn) => dispatch(createdList(sId, pn)),
        deleteList: (listId, sId) => dispatch(deleteList(listId, sId)),
    };
};

export class MyLists extends Component {
    componentDidMount() {
        this.props.createdList(this.props.sessionId, 1);
    }

    render() {
        const { data } = this.props;

        if (data.results && data.results.length) {
            return (
                <div>
                    <div className="header-title">
                        <h1 className="page-title">My Lists</h1>
                        <Link to={`/createlist`}>
                            <button className="add-button">CREATE NEW</button>
                        </Link>
                    </div>
                    {data.results.map((list) => {
                        return (
                            <div key={list.id} className="myLists">
                                <Link
                                    to={`/mylists/listitems/${list.id}`}
                                    className="myLists__link"
                                >
                                    <div className="myLists__link--1">
                                        <p className="myLists__name">
                                            {list.name}
                                        </p>
                                        <p>{list.item_count} items</p>
                                    </div>
                                </Link>
                                <div className="myLists__inside">
                                    <button
                                        onClick={() => {
                                            this.props.deleteList(
                                                this.props.sessionId,
                                                list.id
                                            );
                                        }}
                                        className="myLists__button"
                                    >
                                        delete list
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <Paginator
                        onGetMovies={this.props.createdList}
                        firstParam={this.props.sessionId}
                        data={data}
                    />
                </div>
            );
        } else {
            return <h3>You don't have any list yet!</h3>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLists);
