import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        actor_details: state.actorDetailsReducer.actor_details
    };
};

export class Actor extends Component {
    render() {
        const { config, actor_details } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            actor_details &&
            actor_details.name
        ) {
            const base_url = config.images.base_url;
            const poster_size = config.images.poster_sizes[3];
            return (
                <div className="info">
                    <div className="info__left-side">
                        <img
                            className="img-shadow"
                            alt="movie_poster"
                            src={`${base_url}${poster_size}${actor_details.profile_path}`}
                        />
                    </div>
                    <div className="info__right-side">
                        <div className="title">
                            <h2 className="title__elem">
                                {actor_details.name}
                            </h2>
                            <p>
                                {actor_details.deathday
                                    ? `Born: ${actor_details.birthday}  Died: ${actor_details.deathday}`
                                    : `Born: ${actor_details.birthday}`}
                            </p>
                        </div>
                        <div className="production">
                            <h3 className="italic">PLACE OF BIRTH</h3>
                            <p>{actor_details.place_of_birth}</p>
                        </div>
                        <div className="overview">
                            <h3 className="italic">BIOGRAPHY</h3>
                            <p>{actor_details.biography}</p>
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

export default connect(mapStateToProps)(Actor);
