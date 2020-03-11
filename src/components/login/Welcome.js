import React, { Component } from "react";
import "./style/welcome.scss";
import { connect } from "react-redux";
import { getSessionId } from "../../actions/actions";
import { Link } from "react-router-dom";

let urlParams = new URLSearchParams(window.location.search);
let requestedToken = urlParams.get("request_token");
let tokenObj = {
    request_token: `${requestedToken}`
};

const mapStateToProps = state => {
    return {
        sessionId: state.sessionReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSessionId: token => dispatch(getSessionId(token))
    };
};

export class Welcome extends Component {
    componentDidMount() {
        this.props.getSessionId(tokenObj);
    }

    render() {
        const { sessionId } = this.props;
        if (sessionId.length) {
            return (
                <div className="welcome-body">
                    <div className="welcome">
                        <h1 className="welcome-h1">Welcome to MFM!</h1>
                        <h3 className="welcome-h3">
                            let's make a list of your favorite movies
                        </h3>
                    </div>
                    <Link to="/" className="header-link-style">
                        <button className="w-btn">HOME</button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="welcome-body">
                    <h1 className="welcome-h1">
                        We are fetching data, this may take a while...
                    </h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
