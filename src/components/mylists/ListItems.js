import React, { Component } from "react";
import { connect } from "react-redux";
import {
    myList,
    getSuggestion1,
    clearSuggestion,
    addMovie,
    deleteMovie,
} from "../../actions/actions";
import { Link } from "react-router-dom";
import Paginator from "../pagination/Paginator";
import "./style/listItems.scss";
import AddItem from "./AddItem";

const mapStateToProps = (state) => {
    return {
        data: state.myListReducer.data,
        config: state.getImgDataReducer.config,
        sessionId: state.sessionReducer,
        movies: state.suggestionReducer1.movies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        myList: (listId, pn) => dispatch(myList(listId, pn)),
        onGetSuggestion1: (query) => dispatch(getSuggestion1(query)),
        onClear: () => dispatch(clearSuggestion()),
        addMovie: (sId, listId, movieId) =>
            dispatch(addMovie(sId, listId, movieId)),
        deleteMovie: (sId, listId, movieId) =>
            dispatch(deleteMovie(sId, listId, movieId)),
    };
};

export class ListItems extends Component {
    state = {
        query: "",
    };

    componentDidMount() {
        this.props.myList(this.props.match.params.id, 1);
    }

    handleChange = () => {
        this.setState({ query: this.search.value }, () => {
            if (this.state.query && this.state.query.length >= 3) {
                this.props.onGetSuggestion1(this.state.query);
            } else {
                this.props.onClear();
            }
        });
    };

    render() {
        const { data, config, movies } = this.props;
        if (config.images && config.images.base_url && data.results) {
            const base_url = config.images.base_url;
            const poster_size = config.images.poster_sizes[1];
            return (
                <div className="wholePage">
                    <h1 className="page-title">{data.name}</h1>
                    <div className="add-movie">
                        <input
                            type="text"
                            placeholder="Add movie"
                            ref={(input) => (this.search = input)}
                            onChange={this.handleChange}
                        />
                        <AddItem
                            config={config}
                            movies={movies}
                            onClear={this.props.onClear}
                            addMovie={this.props.addMovie}
                            sessionId={this.props.sessionId}
                            listId={this.props.match.params.id}
                        />
                    </div>
                    <div className="popular-section pop-sec">
                        <div className="popular-poster">
                            {data.results.map((movie) => {
                                return (
                                    <div
                                        key={movie.id}
                                        className="popular-poster__inside item"
                                    >
                                        <p
                                            className="delete-item"
                                            onClick={() => {
                                                this.props.deleteMovie(
                                                    this.props.sessionId,
                                                    this.props.match.params.id,
                                                    movie.id
                                                );
                                            }}
                                        >
                                            delete item
                                        </p>
                                        <Link to={`/detail/${movie.id}`}>
                                            <img
                                                className="img-shadow"
                                                alt="movie_poster"
                                                src={`${base_url}${poster_size}${movie.poster_path}`}
                                            />
                                        </Link>
                                        <h4>
                                            <Link
                                                to={`/detail/${movie.id}`}
                                                className="link-style"
                                            >
                                                {movie.title}
                                            </Link>
                                        </h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Paginator
                        onGetMovies={this.props.myList}
                        firstParam={this.props.match.params.id}
                        data={data}
                    />
                </div>
            );
        } else {
            return <h1>You will see movies very soon...</h1>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
