import React, { Component } from "react";
import { connect } from "react-redux";
import { watchlistMovies } from "../../actions/actions";
import { Link } from "react-router-dom";
import Paginator from "../pagination/Paginator";

const mapStateToProps = state => {
    return {
        data: state.watchlistReducer.data,
        config: state.getImgDataReducer.config,
        sessionId: state.sessionReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        watchlistMovies: (sId, pn) => dispatch(watchlistMovies(sId, pn))
    };
};

export class Watchlist extends Component {
    componentDidMount() {
        this.props.watchlistMovies(this.props.sessionId, 1);
    }

    render() {
        const { data, config } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            data.results &&
            data.results.length
        ) {
            const base_url = config.images.base_url;
            const poster_size = config.images.poster_sizes[1];
            return (
                <div>
                    <h1 className="page-title">My Watchlist</h1>
                    <div className="popular-section pop-sec">
                        <div className="popular-poster">
                            {data.results.map(movie => {
                                return (
                                    <div
                                        key={movie.id}
                                        className="popular-poster__inside"
                                    >
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
                        onGetMovies={this.props.watchlistMovies}
                        firstParam={this.props.sessionId}
                        data={data}
                    />
                </div>
            );
        } else {
            return <h1>You will see watchlist very soon...</h1>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
