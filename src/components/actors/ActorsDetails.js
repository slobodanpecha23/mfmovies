import React, { Component } from "react";
import { connect } from "react-redux";
import { actorDetails, actorMovies } from "../../actions/actions";
import Actor from "./Actor";
import ActorMovies from "./ActorMovies";

const mapDispatchToProps = dispatch => {
    return {
        onActorDetails: id => dispatch(actorDetails(id)),
        onActorMovies: id => dispatch(actorMovies(id))
    };
};

export class ActorsDetails extends Component {
    componentDidMount() {
        this.props.onActorDetails(this.props.match.params.id);
        this.props.onActorMovies(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Actor />
                <ActorMovies />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ActorsDetails);
