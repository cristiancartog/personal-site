import * as React from "react";

import './Lannguages.css';
import ScreenBlock from "../screenblock/ScreenBlock";
import Dots from "../hobbies/dots/Dots";
import BlockHeader from "../screenblock/BlockHeader";


export default class Languages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            languages: [{
                name: 'Romanian',
                level: 10,
                levelDescription: 'Native'
            }, {
                name: 'English',
                level: 8,
                levelDescription: 'Proficient'
            }, {
                name: 'Spanish',
                level: 3,
                levelDescription: 'Elementary'
            }, {
                name: 'German',
                level: 3,
                levelDescription: 'Elementary'
            }]
        }
    }

    render() {
        return (
            <ScreenBlock id="languages">
                <BlockHeader
                    title="Languages"
                    subtitle="I speak"
                />

                <div className="languages">
                    {this.state.languages.map(language => (
                        <div
                            className="language"
                            key={language.name}
                        >
                            <div className="language-info">
                                    <span className="language-name">
                                        {language.name}
                                    </span>
                                <br/>
                                <span className="language-description">
                                        {language.levelDescription}
                                    </span>
                            </div>

                            <Dots
                                max={10}
                                active={language.level}
                            />
                        </div>
                    ))}
                </div>
            </ScreenBlock>
        );
    }
}
