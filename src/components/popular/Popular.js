import React, { Component } from "react";
import "./style/popular.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        popular: state.getImgDataReducer.popular,
        error: state.getImgDataReducer.error
    };
};

export class Popular extends Component {
    render() {
        const { config, popular } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            popular.results &&
            popular.results.length
        ) {
            const base_url = config.images.base_url;
            const backdrop_size = config.images.logo_sizes[4];
            const poster = popular.results.slice(5, 9);
            return (
                <div className="popular-section">
                    <h1 className="popular-heading">
                        <Link
                            to={`/popular_movies`}
                            className="link-style__popular"
                        >
                            Popular ➜
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
                    <h1>You will see popular movies very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(Popular);
