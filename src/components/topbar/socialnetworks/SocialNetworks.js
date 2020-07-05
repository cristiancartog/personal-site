import * as React from "react";

import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

import './SocialNetworks.css';

export default class SocialNetworks extends React.Component {

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
            <div className="links">
                {this.state.links.map(link => (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={link.url}
                        className={'link-link'}
                        href={link.url}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        );
    }

}
