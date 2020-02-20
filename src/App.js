import React, { Component } from "react";
import Header from "./components/header/Header";
import CarouselArea from "./components/carousel/CarouselArea";
import { connect } from "react-redux";
import { getImgData } from "./actions/actions";
import Popular from "./components/popular/Popular";

const mapDispatchToProps = dispatch => {
    return {
        onGetImgData: () => dispatch(getImgData())
    };
};

export class App extends Component {
    componentDidMount() {
        this.props.onGetImgData();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <CarouselArea />
                <Popular />
                <h1>Wish u amazing day!</h1>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);
