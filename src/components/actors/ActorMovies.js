import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        actor_movies: state.actorMoviesReducer.actor_movies
    };
};

export class ActorMovies extends Component {
    render() {
        const { config, actor_movies } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            actor_movies.cast &&
            actor_movies.cast.length
        ) {
            const base_url = config.images.base_url;
            const profile_size = config.images.profile_sizes[1];
            const profile = actor_movies.cast.map(obj => obj).slice(0, 5);
            return (
                <div className="cast-section">
                    <h1 className="popular-heading">The most famous roles</h1>
                    <div className="cast-section__profile">
                        {profile.map(obj => {
                            return (
                                <div
                                    key={obj.id}
                                    className="cast-section__profile--inside"
                                >
                                    <Link to={`/detail/${obj.id}`}>
                                        <img
                                            alt="profile"
                                            src={`${base_url}${profile_size}${obj.poster_path}`}
                                        />
                                    </Link>
                                    <h4 className="pad-el">
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
                    <h1>You will see movies very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(ActorMovies);
