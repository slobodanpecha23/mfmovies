import React, { Component } from "react";
import Header from "./components/header/Header";
import CarouselArea from "./components/carousel/CarouselArea";
import { connect } from "react-redux";
import { getImgData, getImgNowPlaying } from "./actions/actions";
import Popular from "./components/popular/Popular";
import NowPlaying from "./components/now-playing/NowPlaying";

const mapDispatchToProps = dispatch => {
    return {
        onGetImgData: () => dispatch(getImgData()),
        onGetImgNowPlaying: () => dispatch(getImgNowPlaying())
    };
};

export class App extends Component {
    componentDidMount() {
        this.props.onGetImgData();
        this.props.onGetImgNowPlaying();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <CarouselArea />
                <Popular />
                <NowPlaying />
                <h1>Wish u amazing day!</h1>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);
