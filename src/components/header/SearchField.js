import React, { Component } from "react";
import "./style/searchField.scss";
import { connect } from "react-redux";
import { getSuggestion, clearSuggestion } from "../../actions/actions";
import Suggestion from "./Suggestion";

const mapStateToProps = state => {
    return {
        movies: state.suggestionReducer.movies,
        config: state.getImgDataReducer.config
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetSuggestion: query => dispatch(getSuggestion(query)),
        onClear: () => dispatch(clearSuggestion())
    };
};

export class SearchField extends Component {
    state = {
        query: ""
    };

    handleChange = () => {
        this.setState({ query: this.search.value }, () => {
            if (this.state.query && this.state.query.length >= 3) {
                this.props.onGetSuggestion(this.state.query);
            } else {
                this.props.onClear();
            }
        });
    };

    render() {
        const { movies, config } = this.props;

        return (
            <form className="searchForm">
                <div>
                    <input
                        type="text"
                        placeholder="Search movie..."
                        ref={input => (this.search = input)}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Search" />
                </div>
                <Suggestion
                    config={config}
                    movies={movies}
                    onClear={this.props.onClear}
                />
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
