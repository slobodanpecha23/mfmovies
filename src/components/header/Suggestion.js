import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Suggestion extends Component {
    render() {
        const { config, movies } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            movies.results &&
            movies.results.length
        ) {
            const base_url = config.images.base_url;
            const poster_size = config.images.logo_sizes[1];
            const sugg_movies = movies.results.slice(0, 5);
            return (
                <div className="suggestion">
                    {sugg_movies.map((movie) => {
                        return (
                            <Link
                                to={`/detail/${movie.id}`}
                                className="link-style-suggestion"
                                onClick={this.props.onClear}
                                key={movie.id}
                            >
                                <div className="suggestion__movie">
                                    <img
                                        src={`${base_url}${poster_size}${movie.backdrop_path}`}
                                        alt="movie"
                                    />
                                    <h4 className="title-padding">
                                        {movie.title}
                                    </h4>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Suggestion;
