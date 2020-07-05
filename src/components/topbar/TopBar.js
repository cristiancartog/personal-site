import * as React from "react";

import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import './TopBar.css';
import SocialNetworks from "./socialnetworks/SocialNetworks";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

export default class TopBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [{
                url: 'mailto:cristiancartog.dev@gmail.com',
                icon: <MailIcon/>
            }, {
                url: 'https://www.linkedin.com/in/cristian-cartog-4ba98a66/',
                icon: <LinkedInIcon/>
            }, {
                url: 'https://github.com/cristiancartog',
                icon: <GitHubIcon/>
            }, {
                url: 'https://www.facebook.com/cristian.cartog',
                icon: <FacebookIcon/>
            }]
        }
    }

    render() {
        return (
            <AppBar className="top-bar" position="absolute">
                <Toolbar className="top-bar-header">
                    {/*<LanguagePicker />*/}
                    <SocialNetworks/>
                </Toolbar>
            </AppBar>
        );
    }

}
