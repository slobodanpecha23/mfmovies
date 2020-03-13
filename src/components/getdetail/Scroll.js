import React from "react";

const Scroll = props => {
    return (
        <div style={{ overflowY: "scroll", height: "200px", borderTop: '2px solid white', borderBottom: '2px solid white' }}>
            {props.children}
        </div>
    );
};

export default Scroll;
