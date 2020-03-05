import React, { Component } from "react";
import Header from "./components/header/Header";
import { connect } from "react-redux";
import { getImgData, getNowPlaying, getTopRated } from "./actions/actions";
import CarouselArea from "./components/carousel/CarouselArea";
import Popular from "./components/popular/Popular";
import NowPlaying from "./components/nowplaying/NowPlaying";
import TopRated from "./components/toprated/TopRated";
import Footer from "./components/footer/Footer";
import MovieDetail from "./components/getdetail/MovieDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActorsDetails from "./components/actors/ActorsDetails";
import ListOfPopular from "./components/pagination/ListOfPopular";
import ListOfNowPlaying from "./components/pagination/ListOfNowPlaying";
import ListOfTopRated from "./components/pagination/ListOfTopRated";

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
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/detail/:id" component={MovieDetail} />
                        <Route
                            path="/actor_details/:id"
                            component={ActorsDetails}
                        />
                        <Route
                            path="/popular_movies"
                            component={ListOfPopular}
                        />
                        <Route
                            path="/now_playing_movies"
                            component={ListOfNowPlaying}
                        />
                        <Route
                            path="/top_rated_movies"
                            component={ListOfTopRated}
                        />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

const Home = () => (
    <div>
        <CarouselArea />
        <Popular />
        <NowPlaying />
        <TopRated />
    </div>
);

export default connect(null, mapDispatchToProps)(App);
