import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import './Stepper.css';

export default class Stepper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            assignments: this.props.position.assignments.length,
            assignment: this.props.position.assignments[0]
        }
    }

    handleNext() {
        let nextStep = this.state.step + 1;
        this.setState({
            step: nextStep,
            assignment: this.props.position.assignments[nextStep],
            assignments: this.state.assignments
        });
    }

    handleBack() {
        let nextStep = this.state.step - 1;
        this.setState({
            step: nextStep,
            assignment: this.props.position.assignments[nextStep],
            assignments: this.state.assignments
        });
    }

    render() {
        return (
            <div>
                <div className="paper-container">
                    {/*<Paper className="assignment">*/}
                    <div className="description">
                        <p>{this.state.assignment.name}</p>

                        {this.state.assignment.client && <p>{this.state.assignment.client}</p>}

                        <p>{this.state.assignment.description}</p>

                        <p>{this.state.assignment.summary}</p>
                    </div>

                    <div className="skills">
                        {this.state.assignment.skills.map(skill => <Chip
                            key={skill}
                            className="spaced"
                            label={skill}
                        />)}
                    </div>
                    {/*</Paper>*/}

                </div>

                <MobileStepper
                    className="stepper-navigator"
                    variant="dots"
                    steps={this.state.assignments}
                    position="static"
                    activeStep={this.state.step}
                    nextButton={
                        <Button size="small"
                                onClick={() => this.handleNext()}
                                disabled={this.state.step === this.state.assignments - 1}>
                            Next
                            <KeyboardArrowRight/>
                        </Button>
                    }
                    backButton={
                        <Button size="small"
                                onClick={() => this.handleBack()}
                                disabled={this.state.step === 0}>
                            <KeyboardArrowLeft/>
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}
