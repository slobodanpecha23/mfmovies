import React, { Component } from "react";
import { connect } from "react-redux";
import { getNowPagination } from "../../actions/actions";
import { Link } from "react-router-dom";
import { Paginator } from "./Paginator";

const mapStateToProps = state => {
    return {
        data: state.nowPlayingPageReducer.data,
        config: state.getImgDataReducer.config
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetNowPagination: (category, pn) =>
            dispatch(getNowPagination(category, pn))
    };
};

export class ListOfNowPlaying extends Component {
    componentDidMount() {
        this.props.onGetNowPagination("now_playing", 1);
    }

    render() {
        const { data, config } = this.props;
        if (
            config.images &&
            config.images &&
            data.results &&
            data.results.length
        ) {
            const base_url = config.images.base_url;
            const poster_size = config.images.poster_sizes[1];
            return (
                <div>
                    <h1 className="page-title">Now Playing</h1>
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
                        onGetMovies={this.props.onGetNowPagination}
                        firstParam="now_playing"
                        data={data}
                    />
                </div>
            );
        } else {
            return <h1>You will see now playing movies very soon...</h1>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfNowPlaying);
