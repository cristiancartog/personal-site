import * as React from "react";

import './Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <section className="home" id="home">
                <div className="home-in">
                    <div className="home-content">
                        <h1>Cristian Cârtog</h1>
                        <hr/>
                        <h2>Senior Software Developer, eager to build the systems you need</h2>
                    </div>
                </div>
            </section>
        );
    }

}
