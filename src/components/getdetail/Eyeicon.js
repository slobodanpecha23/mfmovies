import React, { Component } from "react";
import { string, number } from "prop-types";

export class Eyeicon extends Component {
    render() {
        const { color, size } = this.props;

        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 20 20"
            >
                <title>eye</title>
                <path
                    fill={color}
                    d="M10 4.4c-6.561 0-10 4.832-10 5.6 0 0.766 3.439 5.6 10 5.6s10-4.834 10-5.6c0-0.768-3.44-5.6-10-5.6zM10 14.307c-2.455 0-4.445-1.928-4.445-4.307s1.99-4.309 4.445-4.309c2.455 0 4.444 1.93 4.444 4.309s-1.989 4.307-4.444 4.307zM10 10c-0.407-0.447 0.663-2.154 0-2.154-1.228 0-2.223 0.965-2.223 2.154s0.995 2.154 2.223 2.154c1.227 0 2.223-0.965 2.223-2.154 0-0.547-1.877 0.379-2.223 0z"
                ></path>
            </svg>
        );
    }
}

export default Eyeicon;

Eyeicon.propTypes = {
    color: string,
    size: number
};

Eyeicon.defaultProps = {
    color: "#fff",
    size: 80
};
