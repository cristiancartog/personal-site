import * as React from "react";

import ScreenBlock from "../screenblock/ScreenBlock";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import './PersonalProcts.css';
import BlockHeader from "../screenblock/BlockHeader";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Chip from "@material-ui/core/Chip";

export default class PersonalProjects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [{
                name: 'Expense',
                description: 'An android app to track personal expenses and show insightful charts and tables based on cash outflow',
                date: '2015',
                skills: ['Android SDK', 'Gradle', 'Git'],
                link: 'https://github.com/cristiancartog/expense'
            }, {
                name: 'Presentation',
                description: 'this site',
                date: '2020',
                skills: ['React', 'Javascript', 'HTML5', 'CSS3'],
                link: 'https://github.com/cristiancartog/personal-site'
            }, {
                name: 'Vacations',
                description: 'Application meant to facilitate planning and scheduling vacations between team members',
                date: '2019',
                skills: ['Java', 'Spring Boot', 'JPA', 'MariaDB', 'React', 'Javascript', 'HTML5', 'CSS3'],
                link: 'https://github.com/cristiancartog/hello-world'
            }]
        };
    }

    render() {
        return (
            <ScreenBlock id="personal-projects">
                <BlockHeader
                    title="Personal projects"
                    subtitle="Stuff I've done outside work hours"
                />

                <VerticalTimeline>
                    {this.state.projects.map((project, i) => {
                        return (
                            <VerticalTimelineElement
                                key={i}
                                icon={<WorkOutlineIcon/>}
                                iconStyle={{
                                    background: '#f38721',
                                    color: '#fff'
                                }}
                                date={project.date}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    <a target="_blank" rel="noopener noreferrer" href={project.link}>{project.name}</a>
                                </h3>
                                <p>
                                    {project.description}
                                </p>

                                {project.skills.map(skill => <Chip
                                    key={skill}
                                    className="spaced"
                                    label={skill}
                                />)}
                            </VerticalTimelineElement>
                        );
                    })}

                </VerticalTimeline>
            </ScreenBlock>
        );
    }

}
