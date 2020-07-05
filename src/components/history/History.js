import React from "react";

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Button from "@material-ui/core/Button";

import ScreenBlock from "../screenblock/ScreenBlock";
import BlockHeader from "../screenblock/BlockHeader";
import Stepper from "./stepper/Stepper";
import positions from './positions';

import './History.css';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const monthDiff = (start, end) => {
    return end.getMonth() - start.getMonth() +
        (12 * (end.getFullYear() - start.getFullYear()));
}

const formatDate = (date) => `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

const formatYears = (years) => years === 1 ? '1 year' : `${years} years`;
const formatMonths = (months) => {
    if (!months) {
        return ''
    }
    return months === 1 ? 'and 1 month' : `and ${months} months`
}

const formatPeriod = (start, end) => {
    start = new Date(Date.parse(start));
    end = end ? new Date(Date.parse(end)) : new Date();

    let diff = monthDiff(start, end);

    if (diff < 12) {
        return `${formatDate(start)} – ${formatDate(end)} (${formatMonths(diff)} months)`;
    } else if (diff === 12) {
        return `${formatDate(start)} – ${formatDate(end)} ${end.getFullYear()} (1 year)`;
    } else {
        return `${formatDate(start)} – ${formatDate(end)} (${formatYears(Math.round(diff / 12))} ${formatMonths(diff % 12)})`;
    }
};


class History extends React.Component {

    render() {
        return (
            <ScreenBlock id="history">
                <BlockHeader
                    title="Work experience & Education"
                    subtitle="My previous jobs and my qualifications."
                />

                <VerticalTimeline>
                    {positions.map((position, i) => {
                        return (
                            <VerticalTimelineElement
                                key={i}
                                icon={<WorkIcon/>}
                                iconStyle={{
                                    background: '#2196f3',
                                    color: '#fff'
                                }}
                                className="position"
                                date={formatPeriod(position.startDate, position.endDate)}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {position.company}
                                </h3>
                                <h4>
                                    {position.title}
                                </h4>

                                <Stepper position={position}/>
                            </VerticalTimelineElement>
                        );
                    })}

                    <VerticalTimelineElement
                        className="education"
                        key={positions.length}
                        icon={<SchoolIcon/>}
                        iconStyle={{
                            background: '#830038',
                            color: '#fff'
                        }}
                        date="2004 - 2009 (5 years)"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Bachelor's degree in Computer Science
                        </h3>
                        <p>
                            "Politehnica" University of Timisoara
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <div className="resume-container">
                    <Button
                        variant="contained"
                        color="primary"
                        target="_blank"
                        href="/CV-CristianCartog-full.pdf"
                    >
                        Full Resume
                    </Button>
                </div>

            </ScreenBlock>
        );
    }
}


export default History;
