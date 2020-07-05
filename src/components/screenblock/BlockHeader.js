import React from "react";

export default class BlockHeader extends React.Component {

    render() {
        return (
            <div className="heading">
                {this.props.title &&
                <h2>
                    {this.props.title}
                </h2>
                }
                {this.props.subtitle &&
                <p>
                    {this.props.subtitle}
                </p>
                }
            </div>
        );
    }

}
