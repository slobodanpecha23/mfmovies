import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import Cast from "./Cast";
import { connect } from "react-redux";
import { movieDetail, movieCrew } from "../../actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        onMovieDetails: () => dispatch(movieDetail()),
        onMovieCrew: () => dispatch(movieCrew())
    };
};

export class GetDetail extends Component {
    componentDidMount() {
        this.props.onMovieDetails();
        this.props.onMovieCrew();
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

export default connect(null, mapDispatchToProps)(GetDetail);
