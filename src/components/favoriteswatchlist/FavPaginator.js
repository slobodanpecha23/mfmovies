import React, { Component } from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

export class Paginator extends Component {
    state = {
        currentPage: 1
    };

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });
        this.props.onGetMovies(this.props.sessionId, numPage);
    };

    render() {
        const { data } = this.props;
        if (data.results && data.results.length) {
            return (
                <div className="paginator">
                    <Pagination
                        currentPage={this.state.currentPage}
                        sizePerPage={20}
                        totalPages={data.total_pages}
                        totalSize={data.total_results}
                        showFirstLastPages={true}
                        changeCurrentPage={this.changeCurrentPage}
                    />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Paginator;
