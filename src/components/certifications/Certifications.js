import React from "react";
import LazyLoad from 'react-lazyload';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import ScreenBlock from "../screenblock/ScreenBlock";

import './Certifications.css';
import BlockHeader from "../screenblock/BlockHeader";

export default class Certifications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            certificates: [{
                name: 'SCJP 6',
                logo: 'scjp.gif',
                proofImage: 'scjp.png',
                proofLink: 'scjp.pdf'
            }, {
                name: 'SCWCD 5',
                logo: 'scwcd.gif',
                proofImage: 'scwcd.png',
                proofLink: 'scwcd.pdf'
            }, {
                name: 'SCJJWS 5',
                logo: 'scdjws.gif',
                proofImage: 'scdjws.png',
                proofLink: 'scdjws.pdf'
            }, {
                name: 'OCEJPA',
                logo: 'ocejpa.gif',
                proofImage: 'ocejpa.png',
                proofLink: 'ocejpa.pdf'
            }, {
                name: 'CCNA',
                logo: 'ccna.jpg',
                proofImage: 'ccna-proof.jpg',
                proofLink: 'ccna-proof.jpg'
            }]
        };
    }

    render() {
        return (
            <ScreenBlock id="certifications">
                <BlockHeader
                    title="Certifications"
                    subtitle="Oracle, Sun, Cisco"
                />

                <div className="certification">
                    {this.state.certificates.map((cert => {
                        return (
                            <LazyLoad height={150} key={cert.name}>
                                <div
                                    className="certification-container">
                                    <div className="certification">
                                        <Card className="certification-front">
                                            <CardContent>
                                                <img alt={cert.name} src={'/certificates/' + cert.logo}/>
                                            </CardContent>
                                        </Card>
                                        <Card className="certification-back">
                                            <CardContent>
                                                <div className="certification-back-name">
                                                    {cert.name}
                                                </div>

                                                <a target="_blank" href={'/certificates/' + cert.proofLink}
                                                   rel="noopener noreferrer">
                                                    <img alt={cert.name} src={'/certificates/' + cert.proofImage}/>
                                                </a>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </LazyLoad>
                        );
                    }))}
                </div>
            </ScreenBlock>
        );
    }
}
