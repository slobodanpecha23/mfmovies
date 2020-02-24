import React, { Component } from "react";
import Header from "./components/header/Header";
import { connect } from "react-redux";
import { getImgData, getNowPlaying, getTopRated } from "./actions/actions";
// import CarouselArea from "./components/carousel/CarouselArea";
// import Popular from "./components/popular/Popular";
// import NowPlaying from "./components/nowplaying/NowPlaying";
// import TopRated from "./components/toprated/TopRated";
import Footer from "./components/footer/Footer";
import GetDetail from "./components/getdetail/MovieDetail";

const mapDispatchToProps = dispatch => {
    return {
        onGetImgData: () => dispatch(getImgData()),
        onGetNowPlaying: () => dispatch(getNowPlaying()),
        onGetTopRated: () => dispatch(getTopRated())
    };
};

export class App extends Component {
    componentDidMount() {
        this.props.onGetImgData();
        this.props.onGetNowPlaying();
        this.props.onGetTopRated();
    }

    render() {
        return (
            <div className="App">
                <Header />
                {/* <CarouselArea />
                <Popular />
                <NowPlaying />
                <TopRated /> */}
                <GetDetail />
                <Footer />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);
