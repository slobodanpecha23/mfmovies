import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./style/carousel.scss";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        config: state.getImgDataReducer.config,
        popular: state.getImgDataReducer.popular,
        error: state.getImgDataReducer.error
    };
};

export class CarouselArea extends Component {
    render() {
        const { config, popular } = this.props;
        if (
            config.images &&
            config.images.base_url &&
            popular.results &&
            popular.results.length
        ) {
            const base_url = config.images.base_url;
            const backdrop_size = config.images.backdrop_sizes[3];
            const wallpaper = popular.results.map(movie => movie).slice(0, 5);
            return (
                <div className="carousel-style">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        stopOnHover={true}
                        infiniteLoop={true}
                        className="carousel-width"
                        verticalSwipe="standard"
                    >
                        {wallpaper.map(obj => {
                            return (
                                <div key={obj.id}>
                                    <img
                                        alt="movie_wallpaper"
                                        src={`${base_url}${backdrop_size}${obj.backdrop_path}`}
                                    />
                                    <p className="legend">{obj.title}</p>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            );
        } else {
            return (
                <div className="loading">
                    <h1>LOADING...</h1>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(CarouselArea);
