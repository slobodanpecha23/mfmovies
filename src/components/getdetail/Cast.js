import React, { Component } from "react";
import "./style/cast.scss";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        cast: state.castReducer.cast
    };
};

export class Cast extends Component {
    render() {
        const { config, cast } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            cast.cast &&
            cast.cast.length
        ) {
            const base_url = config.images.base_url;
            const profile_size = config.images.profile_sizes[1];
            const profile = cast.cast.map(obj => obj).slice(0, 5);
            return (
                <div className="cast-section">
                    <h1 className="popular-heading">Top Billed Cast</h1>
                    <div className="cast-section__profile">
                        {profile.map(obj => {
                            return (
                                <div
                                    key={obj.id}
                                    className="cast-section__profile--inside"
                                >
                                    <img
                                        alt="profile"
                                        src={`${base_url}${profile_size}${obj.profile_path}`}
                                    />
                                    <h4 className="pad-el">{obj.name}</h4>
                                    <p className="pad-el">{obj.character}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="loading1">
                    <h1>You will see cast very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(Cast);
