import React, { Component } from "react";
import "./style/info.scss";
import { connect } from "react-redux";
import Favicon from "./Favicon";
import Eyeicon from "./Eyeicon";
import Listsicon from "./Listsicon";
import AddList from "./AddList";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        movie_detail: state.movieDetailReducer.movie_detail
    };
};

export class MovieInfo extends Component {
    state = {
        activeFavicon: false,
        activeEyeicon: false,
        activeListsicon: false
    };

    handleFaviconClick = () => {
        this.setState(prevState => ({
            activeFavicon: !prevState.activeFavicon
        }));
    };

    handleEyeiconClick = () => {
        this.setState(prevState => ({
            activeEyeicon: !prevState.activeEyeicon
        }));
    };

    handleListsiconClick = () => {
        this.setState(prevState => ({
            activeListsicon: !prevState.activeListsicon
        }));
    };

    render() {
        const { config, movie_detail } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            movie_detail &&
            movie_detail.release_date
        ) {
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
                        <div className="icons">
                            <div
                                className="icon icon1"
                                onClick={this.handleFaviconClick}
                            >
                                <Favicon
                                    color={
                                        this.state.activeFavicon
                                            ? "#FF0000"
                                            : "#fff"
                                    }
                                />
                            </div>
                            <div
                                className="icon icon2"
                                onClick={this.handleEyeiconClick}
                            >
                                <Eyeicon
                                    color={
                                        this.state.activeEyeicon
                                            ? "#3098EA"
                                            : "#fff"
                                    }
                                />
                            </div>
                            <div
                                className="icon icon3"
                                onClick={this.handleListsiconClick}
                            >
                                <Listsicon
                                    color={
                                        this.state.activeListsicon
                                            ? "#38EA30"
                                            : "#fff"
                                    }
                                />
                                {this.state.activeListsicon ? (
                                    <AddList />
                                ) : null}
                            </div>
                        </div>
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
                                    src={
                                        movie_detail.production_companies
                                            .length === 0
                                            ? ""
                                            : `${base_url}${logo_size}${movie_detail.production_companies[0].logo_path}`
                                    }
                                />
                                <p>
                                    {movie_detail.production_companies
                                        .length === 0
                                        ? "--"
                                        : movie_detail.production_companies[0]
                                              .name}
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
