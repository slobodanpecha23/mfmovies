import React, { Component } from "react";
import "./style/info.scss";
import { connect } from "react-redux";
import Icon from "./Icon";
import AddList from "./AddList";
import {
    markAsFav,
    markAsViewed,
    getAccountState,
    changeAccountState,
    changeAccountState1,
    changeAccountState2,
    changeAccountState3
} from "../../actions/actions";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        movie_detail: state.movieDetailReducer.movie_detail,
        sessionId: state.sessionReducer,
        favorites: state.accountStatesReducer.favorites,
        viewed: state.accountStatesReducer.viewed
    };
};

const mapDispatchToProps = dispatch => {
    return {
        markAsFav: (id, sId) => dispatch(markAsFav(id, sId)),
        markAsViewed: (id, sId) => dispatch(markAsViewed(id, sId)),
        getAccountState: (sId, movieId) =>
            dispatch(getAccountState(sId, movieId)),
        changeAccountState: () => dispatch(changeAccountState()),
        changeAccountState1: () => dispatch(changeAccountState1()),
        changeAccountState2: () => dispatch(changeAccountState2()),
        changeAccountState3: () => dispatch(changeAccountState3())
    };
};

export class MovieInfo extends Component {
    state = {
        activeEyeicon: false,
        activeListsicon: false
    };

    componentDidMount() {
        this.props.getAccountState(this.props.sessionId, this.props.movieId);
    }

    handleFaviconClick = () => {
        if (this.props.favorites) {
            this.props.markAsFav(this.props.movieId, this.props.sessionId);
            this.props.changeAccountState1();
        } else {
            this.props.markAsFav(this.props.movieId, this.props.sessionId);
            this.props.changeAccountState();
        }
    };

    handleEyeiconClick = () => {
        if (this.props.viewed) {
            this.props.markAsViewed(this.props.movieId, this.props.sessionId);
            this.props.changeAccountState3();
        } else {
            this.props.markAsViewed(this.props.movieId, this.props.sessionId);
            this.props.changeAccountState2();
        }
    };

    handleListsiconClick = () => {
        this.setState(prevState => ({
            activeListsicon: !prevState.activeListsicon
        }));
    };

    render() {
        const { config, movie_detail, favorites, viewed } = this.props;
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
                                <Icon
                                    path="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"
                                    color={favorites ? "#FF0000" : "#fff"}
                                />
                            </div>
                            <div
                                className="icon icon2"
                                onClick={this.handleEyeiconClick}
                            >
                                <Icon
                                    path="M10 4.4c-6.561 0-10 4.832-10 5.6 0 0.766 3.439 5.6 10 5.6s10-4.834 10-5.6c0-0.768-3.44-5.6-10-5.6zM10 14.307c-2.455 0-4.445-1.928-4.445-4.307s1.99-4.309 4.445-4.309c2.455 0 4.444 1.93 4.444 4.309s-1.989 4.307-4.444 4.307zM10 10c-0.407-0.447 0.663-2.154 0-2.154-1.228 0-2.223 0.965-2.223 2.154s0.995 2.154 2.223 2.154c1.227 0 2.223-0.965 2.223-2.154 0-0.547-1.877 0.379-2.223 0z"
                                    color={viewed ? "#3098EA" : "#fff"}
                                />
                            </div>
                            <div
                                className="icon icon3"
                                onClick={this.handleListsiconClick}
                            >
                                <Icon
                                    path="M19.4 9h-3.4v-3.4c0-0.6-0.4-0.6-1-0.6s-1 0-1 0.6v3.4h-3.4c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h3.4v3.4c0 0.6 0.4 0.6 1 0.6s1 0 1-0.6v-3.4h3.4c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 9h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 14h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 4h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1z"
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
