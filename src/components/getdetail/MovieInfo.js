import React, { Component } from "react";
import "./style/info.scss";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        movie_detail: state.movieDetailReducer.movie_detail
    };
};

export class MovieInfo extends Component {
    render() {
        const { config, movie_detail } = this.props;
        if (config.images && config.images.base_url && movie_detail) {
            const base_url = config.images.base_url;
            const poster_size = config.images.poster_sizes[3];
            const logo_size = config.images.logo_sizes[1];
            return (
                <div className="info">
                    <div className="info__left-side">
                        <img
                            className="img-shadow"
                            alt="movie_poster"
                            src={`${base_url}${poster_size}${movie_detail.poster_path}`}
                        />
                    </div>
                    <div className="info__right-side">
                        <div className="title">
                            <h2 className="title__elem">
                                {movie_detail.title}
                                <span className="opacity">
                                    ({movie_detail.release_date.substring(0, 4)}
                                    )
                                </span>
                            </h2>
                            <div className="genres">
                                {movie_detail.genres.map(genre => {
                                    return (
                                        <p
                                            key={genre.id}
                                            className="genres__name"
                                        >
                                            {genre.name}
                                        </p>
                                    );
                                })}
                            </div>
                            <p>Rating: {movie_detail.vote_average}</p>
                        </div>
                        <div className="overview">
                            <h3 className="italic">OVERVIEW</h3>
                            <p>{movie_detail.overview}</p>
                        </div>
                        <div className="production">
                            <h3 className="italic">PRODUCTION</h3>
                            <div className="production__logo">
                                <img
                                    className="production__logo--img"
                                    alt="production logo"
                                    src={`${base_url}${logo_size}${movie_detail.production_companies[0].logo_path}`}
                                />
                                <p>
                                    {movie_detail.production_companies[0].name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="loading1">
                    <h1>You will see movie details very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(MovieInfo);
