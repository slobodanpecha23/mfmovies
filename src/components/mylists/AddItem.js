import React, { Component } from "react";
import "./style/addItem.scss";

export class AddItem extends Component {
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
                <div className="add-page">
                    {sugg_movies.map((movie) => {
                        return (
                            <div
                                className="suggestion__movie add-page__inside"
                                onClick={() => {
                                    this.props.addMovie(
                                        this.props.sessionId,
                                        this.props.listId,
                                        movie.id
                                    );
                                    this.props.onClear();
                                }}
                                key={movie.id}
                            >
                                <img
                                    src={`${base_url}${poster_size}${movie.backdrop_path}`}
                                    alt="movie"
                                />
                                <h4 className="title-padding">{movie.title}</h4>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default AddItem;
