import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopularPagination } from "../../actions/actions";
import PopularList from "./PopularList";
import { Link } from "react-router-dom";
import "./style/pagination.scss";

const mapStateToProps = state => {
    return {
        data: state.popularPageReducer.data,
        config: state.getImgDataReducer.config
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetPopularMovies: (category, pn) =>
            dispatch(getPopularPagination(category, pn))
    };
};

export class ListOfPopular extends Component {
    componentDidMount() {
        this.props.onGetPopularMovies("popular", 1);
    }

    render() {
        const { data, config } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            data.results &&
            data.results.length
        ) {
            const base_url = config.images.base_url;
            const poster_size = config.images.poster_sizes[1];
            return (
                <div>
                    <h1 className="page-title">Popular Movies</h1>
                    <div className="popular-section pop-sec">
                        <div className="popular-poster">
                            {data.results.map(movie => {
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
                    </div>
                    <PopularList
                        onGetMovies={this.props.onGetPopularMovies}
                        category="popular"
                        data={data}
                    />
                </div>
            );
        } else {
            return <h1>You will see popular movies very soon...</h1>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPopular);
