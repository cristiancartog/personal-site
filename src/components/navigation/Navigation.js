import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Scroll from 'react-scroll';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import LanguageIcon from '@material-ui/icons/Language';
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from '@material-ui/icons/Home';

import './Navigation.css';

const Link = props => {
    const {showLabel, ...rest} = props;
    return <Scroll.Link {...rest} />;
};

const buttons = [
    {
        label: 'Home',
        name: 'home',
        icon: <HomeIcon/>,
    },
    {
        label: 'About me',
        name: 'about-me',
        icon: <FaceIcon/>,
    },
    {
        label: 'Work experience',
        name: 'history',
        icon: <WorkIcon/>,
    },
    {
        label: 'Personal projects',
        name: 'personal-projects',
        icon: <WorkOutlineIcon/>
    },
    {
        label: 'Skills',
        name: 'skills',
        icon: <SettingsIcon/>,
    },
    {
        label: 'Certifications',
        name: 'certifications',
        icon: <SettingsIcon/>,
    },
    {
        label: 'Hobbies',
        name: 'hobbies',
        icon: <CategoryIcon/>,
    },
    {
        label: 'Languages',
        name: 'languages',
        icon: <LanguageIcon/>,
    }
];

export default class Navigation extends React.Component {

    render() {
        return (
            <BottomNavigation value="0" className="navigation">
                {buttons.map((button, j) => (
                    <Link
                        key={j}
                        className="navigation-link"
                        to={button.name}
                        activeClass="active"
                        spy
                        smooth
                        offset={button.offset}
                        duration={500}
                    >
                        {button.icon}
                        {button.label}
                    </Link>
                ))}
            </BottomNavigation>
        );
    }


}
