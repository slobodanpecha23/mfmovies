import React, { Component } from "react";
import Pagination from "react-js-pagination";

export class PaginationComponent extends Component {
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    render() {
        return (
            <div>
                <Pagination
                    activePage={this.props.popular.page}
                    itemsCountPerPage={this.props.popular.results.length}
                    totalItemsCount={this.props.popular.total_results}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}

export default PaginationComponent;
