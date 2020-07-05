import * as React from "react";
import ScreenBlock from "../screenblock/ScreenBlock";

import './Hobbies.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import BlockHeader from "../screenblock/BlockHeader";

const hobbyStyles = {
    background: '#EF821E',
    color: '#fff'
}

export default class Hobbies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hobbies: [
                {
                    name: 'Travelling',
                    icon: 'flight',
                    description: 'Only with my family',
                },
                {
                    name: 'Biking',
                    icon: 'directions_bike',
                    description: "When it's cloudy",
                },
                {
                    name: 'Bodybuilding',
                    icon: 'accessibility',
                    description: 'When not in a pandemic',
                },
                {
                    name: 'Reading',
                    icon: 'menu_book',
                    description: 'science, history, finance, philosophy',
                },
                {
                    name: 'Puzzles',
                    icon: 'extension',
                    description: 'jigsaw, sudoku, riddles, escape',
                },
                {
                    name: 'Trading',
                    icon: 'euro',
                    description: 'stocks, ETFs',
                },
            ]
        }
    }

    render() {
        return (
            <ScreenBlock id="hobbies">
                <BlockHeader
                    title="Interests"
                    subtitle="What I like"
                />

                <div className="hobbies">
                    {this.state.hobbies.map(hobby => (
                        <div
                            key={hobby.name}
                            className="hobby-container"
                        >
                            <div className="hobby">
                                <Card
                                    style={hobbyStyles}
                                    className="hobby-front"
                                >
                                    <CardContent>
                                        <Icon>{hobby.icon}</Icon>
                                        <h4>{hobby.name}</h4>
                                    </CardContent>
                                </Card>
                                <Card
                                    key={hobby.name}
                                    style={hobbyStyles}
                                    className="hobby-back"
                                >
                                    <CardContent>
                                        {hobby.description && (
                                            <div>
                                                {hobby.description}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </ScreenBlock>
        );
    }
}
