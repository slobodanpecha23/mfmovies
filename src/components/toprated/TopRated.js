import React, { Component } from "react";
import { connect } from "react-redux";

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
            const poster = top_rated.results.map(movie => movie).slice(0, 4);
            return (
                <div className="top-section">
                    <h1 className="popular-heading">Top rated</h1>
                    <div className="poster-section">
                        {poster.map(obj => {
                            return (
                                <div key={obj.id} className="inside-poster">
                                    <img
                                        className="img-shadow"
                                        alt="movie_poster"
                                        src={`${base_url}${backdrop_size}${obj.poster_path}`}
                                    />
                                    <p>Release date: {obj.release_date}</p>
                                    <p>Rating: {obj.vote_average}</p>
                                    <h4>{obj.title}</h4>
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
