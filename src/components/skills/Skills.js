import React from "react";
import ScreenBlock from "../screenblock/ScreenBlock";
import BlockHeader from "../screenblock/BlockHeader";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import LaptopIcon from '@material-ui/icons/LaptopWindows';
import CallMergeIcon from '@material-ui/icons/CallMerge';

import JavaIcon from './svgicons/JavaIcon';
import JavascriptIcon from './svgicons/JavascripIcon';
import GitIcon from './svgicons/GitIcon';

import './Skills.css';

export default class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: [{
                language: 'Java',
                icon: <JavaIcon/>,
                background: '#c20b0b',
                color: '#fff',
                parts: ['Spring', 'EJB', 'JPA', 'JMS', 'servlets', 'JSP', 'JSF', 'Swing']
            }, {
                language: 'Javascript',
                icon: <JavascriptIcon/>,
                background: '#f7d500',
                color: '#fff',
                parts: ['Node', 'Typescript', 'Angular', 'JQuery', 'React', 'HTML5', 'CSS3', 'Bootstrap']
            }, {
                language: 'SQL / NoSQL',
                icon: <StorageRoundedIcon/>,
                background: '#11bfd4',
                color: '#fff',
                parts: ['Mongo DB', 'MySQL', 'Oracle DB', 'Exasol DB', 'DB2', 'Elastisearch']
            }, {
                language: 'Build Tools',
                icon: <BuildRoundedIcon/>,
                background: '#052de8',
                color: '#fff',
                parts: ['Maven', 'Gradle', 'Ant']
            }, {
                language: 'OS',
                icon: <LaptopIcon/>,
                background: '#6fea79',
                color: '#fff',
                parts: ['Linux', 'Windows', 'MacOs']
            }, {
                language: 'Versioning',
                icon: <GitIcon/>,
                background: '#F34F29',
                color: '#fff',
                parts: ['Git', 'Bitbucket', 'Github', 'SVN']
            }, {
                language: 'Messaging',
                icon: <CallMergeIcon/>,
                background: '#c00202',
                color: '#fff',
                parts: ['ActiveMQ', 'RabbitMQ']
            }, {
                language: 'Other Tools',
                icon: <MoreHorizIcon/>,
                background: '#cb059c',
                color: '#fff',
                parts: ['Docker', 'Nomad', 'Jenkins', 'Jira']
            }]
        }
    }

    render() {
        return (
            <ScreenBlock id="skills">
                <BlockHeader
                    title="Skills"
                    subtitle="Throughout my career I successfully used:"
                />

                <div className="skill">
                    {this.state.skills.map((skillCategory, i) => (
                        <Card key={i}>
                            <CardContent>
                                <Avatar
                                    style={{
                                        background: skillCategory.background,
                                        color: skillCategory.color,
                                        width: 100,
                                        height: 100,
                                        margin: '0 auto',
                                    }}
                                >
                                    {skillCategory.icon}
                                </Avatar>

                                <h3
                                    style={{
                                        color: skillCategory.background
                                    }}
                                >
                                    {skillCategory.language}
                                </h3>

                                {skillCategory.parts.map((skill, j) => (<div key={j}>{skill}</div>))}

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScreenBlock>
        );
    }
}


