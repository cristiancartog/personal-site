import Button from "@material-ui/core/Button";
import React from "react";

import './AboutMe.css';
import ScreenBlock from "../screenblock/ScreenBlock";
import BlockHeader from "../screenblock/BlockHeader";

export default class AboutMe extends React.Component {

    render() {
        return (
            <ScreenBlock id="about-me" className="about-me">
                <BlockHeader
                    title="About me"
                />

                <div className="content">
                    <div className="description">
                        <h3>Cristian Cartog</h3>
                        <h4>Senior software developer</h4>

                        <p>
                            I'm Cristian Cârtog, a software developer with over 10 years of experience, working as a
                            remote consultant / freelancer / contractor.
                        </p>

                        <p>
                            I use my know-how and passion to help companies around the world implement their software
                            solutions, from prototyping to full-stack implementation.
                        </p>

                        <p>
                            <b>My main stack:</b><br/>
                            ☑️ Java, Javascript, Typescript<br/>
                            ☑️ Spring Boot (Web, Data, Security)<br/>
                            ☑️ AngularJS<br/>
                            ☑️ MongoDB, Elasticsearch<br/>
                            ☑️ JMS, ActiveMq<br/>
                            ☑️ Maven, NPM, Artifactory<br/>
                            ☑️ Jenkins, Nomad<br/>
                        </p>

                        <p>
                            Do you need software solutions for your business? Let's connect!
                        </p>

                        <br/>
                        <br/>

                        <div className="about-me-links">
                            <Button
                                variant="contained"
                                color="primary"
                                target="_blank"
                                href="/CV-CristianCartog-simple.pdf"
                            >
                                Resume
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                                href="mailto:cristiancartog.dev@gmail.com"
                                variant="contained"
                                color="secondary"
                            >
                                Contact me
                            </Button>
                        </div>
                    </div>

                    <div className="picture">
                        <img alt="" src="/me.jpg"/>
                    </div>
                </div>
            </ScreenBlock>
        );
    }

}
