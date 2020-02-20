import React, { Component } from "react";
import "./style/nowPlaying.scss";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        get_now_playing: state.getNowPlayingReducer.get_now_playing,
        img_config: state.getImgDataReducer.img_config
    };
};

export class NowPlaying extends Component {
    render() {
        const { img_config, get_now_playing } = this.props;
        if (
            img_config.images &&
            img_config.images.base_url &&
            get_now_playing.results &&
            get_now_playing.results.length
        ) {
            const base_url = img_config.images.base_url;
            const backdrop_size = img_config.images.backdrop_sizes[0];
            const poster_size = img_config.images.poster_sizes[3];
            const poster = get_now_playing.results
                .map(movie => movie)
                .slice(0, 1);
            const backdrop13 = get_now_playing.results
                .map(movie => movie)
                .slice(1, 3);
            const backdrop35 = get_now_playing.results
                .map(movie => movie)
                .slice(3, 5);
            return (
                <div>
                    <h1 className="popular-heading">Now playing</h1>
                    <div className="container">
                        <div className="left-side">
                            <img
                                alt="movie_poster"
                                src={`${base_url}${poster_size}${poster[0].poster_path}`}
                            />
                            <div>
                                <p>Rating: {poster[0].vote_average}</p>
                                <h4>{poster[0].title}</h4>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="inside-backdrop">
                                {backdrop13.map(obj => {
                                    return (
                                        <div key={obj.id} className="backdrop">
                                            <img
                                                alt="movie_poster"
                                                src={`${base_url}${backdrop_size}${obj.backdrop_path}`}
                                            />
                                            <div>
                                                <p>
                                                    Rating: {obj.vote_average}
                                                </p>
                                                <h4>{obj.title}</h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="inside-backdrop">
                                {backdrop35.map(obj => {
                                    return (
                                        <div key={obj.id} className="backdrop">
                                            <img
                                                alt="movie_poster"
                                                src={`${base_url}${backdrop_size}${obj.backdrop_path}`}
                                            />
                                            <div>
                                                <p>
                                                    Rating: {obj.vote_average}
                                                </p>
                                                <h4>{obj.title}</h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="loading1">
                    <h1>You will see now playing movies very soon...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(NowPlaying);
