import React, { Component } from "react";
import "./style/nowPlaying.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        now_playing: state.getNowPlayingReducer.now_playing,
        config: state.getImgDataReducer.config
    };
};

export class NowPlaying extends Component {
    render() {
        const { config, now_playing } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            now_playing.results &&
            now_playing.results.length
        ) {
            const base_url = config.images.base_url;
            const backdrop_size = config.images.backdrop_sizes[0];
            const poster_size = config.images.poster_sizes[3];
            const poster = now_playing.results.map(movie => movie).slice(0, 1);
            const backdrop13 = now_playing.results
                .map(movie => movie)
                .slice(1, 3);
            const backdrop35 = now_playing.results
                .map(movie => movie)
                .slice(3, 5);
            return (
                <div>
                    <h1 className="popular-heading">Now playing</h1>
                    <div className="container">
                        <div className="left-side">
                            <Link to={`/detail/${poster[0].id}`}>
                                <img
                                    className="img-shadow"
                                    alt="movie_poster"
                                    src={`${base_url}${poster_size}${poster[0].poster_path}`}
                                />
                            </Link>
                            <div>
                                <p>Rating: {poster[0].vote_average}</p>
                                <h4>
                                    <Link
                                        to={`/detail/${poster[0].id}`}
                                        className="link-style"
                                    >
                                        {poster[0].title}
                                    </Link>
                                </h4>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="inside-backdrop">
                                {backdrop13.map(obj => {
                                    return (
                                        <div key={obj.id} className="backdrop">
                                            <Link to={`/detail/${obj.id}`}>
                                                <img
                                                    className="img-shadow"
                                                    alt="movie_poster"
                                                    src={`${base_url}${backdrop_size}${obj.backdrop_path}`}
                                                />
                                            </Link>
                                            <div>
                                                <p>
                                                    Rating: {obj.vote_average}
                                                </p>
                                                <h4>
                                                    <Link
                                                        to={`/detail/${obj.id}`}
                                                        className="link-style"
                                                    >
                                                        {obj.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="inside-backdrop">
                                {backdrop35.map(obj => {
                                    return (
                                        <div key={obj.id} className="backdrop">
                                            <Link to={`/detail/${obj.id}`}>
                                                <img
                                                    className="img-shadow"
                                                    alt="movie_poster"
                                                    src={`${base_url}${backdrop_size}${obj.backdrop_path}`}
                                                />
                                            </Link>
                                            <div>
                                                <p>
                                                    Rating: {obj.vote_average}
                                                </p>
                                                <h4>
                                                    <Link
                                                        to={`/detail/${obj.id}`}
                                                        className="link-style"
                                                    >
                                                        {obj.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="loading1">
                    <h1>You will see now playing movies very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(NowPlaying);
