import React, { Component } from "react";
import "./style/pagination.scss";
import { connect } from "react-redux";
import PaginationComponent from "./PaginationComponent";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        popular: state.getImgDataReducer.popular
    };
};

export class PopularPage extends Component {
    render() {
        const { config, popular } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            popular.results &&
            popular.results.length
        ) {
            const base_url = config.images.base_url;
            const poster_size = config.images.poster_sizes[1];
            return (
                <div className="popular-section">
                    <div className="popular-poster">
                        {popular.results.map(movie => {
                            return (
                                <div
                                    key={movie.id}
                                    className="popular-poster__inside"
                                >
                                    <Link to={`/detail/${movie.id}`}>
                                        <img
                                            className="img-shadow"
                                            alt="movie_poster"
                                            src={`${base_url}${poster_size}${movie.poster_path}`}
                                        />
                                    </Link>
                                    <h4>
                                        <Link
                                            to={`/detail/${movie.id}`}
                                            className="link-style"
                                        >
                                            {movie.title}
                                        </Link>
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                    <PaginationComponent popular={popular} />
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

export default connect(mapStateToProps)(PopularPage);
