import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        top_rated: state.getTopRatedReducer.top_rated
    };
};

export class TopRated extends Component {
    render() {
        const { config, top_rated } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            top_rated.results &&
            top_rated.results.length
        ) {
            const base_url = config.images.base_url;
            const backdrop_size = config.images.logo_sizes[4];
            const poster = top_rated.results.slice(0, 4);
            return (
                <div className="top-section">
                    <h1 className="popular-heading">
                        <Link
                            to={`/top_rated_movies`}
                            className="link-style__popular"
                        >
                            Top rated ➜
                        </Link>
                    </h1>
                    <div className="poster-section">
                        {poster.map(obj => {
                            return (
                                <div key={obj.id} className="inside-poster">
                                    <Link to={`/detail/${obj.id}`}>
                                        <img
                                            className="img-shadow"
                                            alt="movie_poster"
                                            src={`${base_url}${backdrop_size}${obj.poster_path}`}
                                        />
                                    </Link>
                                    <p>Release date: {obj.release_date}</p>
                                    <p>Rating: {obj.vote_average}</p>
                                    <h4>
                                        <Link
                                            to={`/detail/${obj.id}`}
                                            className="link-style"
                                        >
                                            {obj.title}
                                        </Link>
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="loading1">
                    <h1>You will see top rated movies very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(TopRated);
