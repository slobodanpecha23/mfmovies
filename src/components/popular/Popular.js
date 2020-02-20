import React, { Component } from "react";
import "./style/popular.scss";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        img_config: state.getImgDataReducer.img_config,
        get_popular: state.getImgDataReducer.get_popular,
        error: state.getImgDataReducer.error
    };
};

export class Popular extends Component {
    render() {
        const { img_config, get_popular } = this.props;
        if (
            img_config.images &&
            img_config.images.base_url &&
            get_popular.results &&
            get_popular.results.length
        ) {
            const base_url = img_config.images.base_url;
            const backdrop_size = img_config.images.logo_sizes[4];
            const poster = get_popular.results.map(movie => movie).slice(5, 9);
            return (
                <div className="popular-section">
                    <h1 className="popular-heading">Popular</h1>
                    <div className="poster-section">
                        {poster.map(obj => {
                            return (
                                <div key={obj.id} className="inside-poster">
                                    <img
                                        alt="movie_poster"
                                        src={`${base_url}${backdrop_size}${obj.poster_path}`}
                                    />
                                    <p>Release date: {obj.release_date}</p>
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
                    <h1>You will see popular movies very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(Popular);
