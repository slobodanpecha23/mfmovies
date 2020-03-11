import React, { Component } from "react";
import "./style/loginButton.scss";
import { token } from "../../utils/ApiUtils";
import { connect } from "react-redux";
import { clearSessionId } from "../../actions/actions";

const mapStateToProps = state => {
    return {
        sessionId: state.sessionReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClearSessionId: () => dispatch(clearSessionId())
    };
};

export class LogInButton extends Component {
    handleClick = () => {
        if (this.props.sessionId) {
            this.props.onClearSessionId();
        } else {
            fetch(token())
                .then(response => response.json())
                .then(data =>
                    window.open(
                        `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://192.168.0.30:3000/welcome`,
                        "_self"
                    )
                );
        }
    };

    render() {
        return (
            <div className="btn">
                <button type="button" onClick={this.handleClick}>
                    {this.props.sessionId ? "Log Out" : "Log In"}
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInButton);
