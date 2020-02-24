import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import Cast from "./Cast";
import { connect } from "react-redux";
import { movieDetail, movieCrew } from "../../actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        onMovieDetails: id => dispatch(movieDetail(id)),
        onMovieCrew: id => dispatch(movieCrew(id))
    };
};

export class MovieDetail extends Component {
    componentDidMount() {
        this.props.onMovieDetails(this.props.match.params.id);
        this.props.onMovieCrew(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <MovieInfo />
                <Cast />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(MovieDetail);
