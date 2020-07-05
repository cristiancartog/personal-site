import * as React from "react";

import './Dots.css';

export default class Dots extends React.Component {

    render() {
        return (
            <div className="dots">
                {[...Array(this.props.max)].map((x, i) => (
                    <div
                        key={i}
                        className={`dot ${this.props.active > i ? 'dot-active' : ''}`}
                    />
                ))}
            </div>
        );
    }

}
