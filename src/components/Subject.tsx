import React from "react";
import "./subject.css";
import { ISubject } from "../models/Subject";

type IState = {
  isHovered: boolean;
};
type IProps = {
  subject: ISubject;
};

class Subject extends React.Component {
  props: IProps;
  state: IState;

  constructor(props: IProps) {
    super(props);
    this.props = props;
    this.state = { isHovered: false };
    this.onMouseCrossBoundary = this.onMouseCrossBoundary.bind(this);
  }

  onMouseCrossBoundary() {
    this.setState({ isHovered: !this.state.isHovered });
  }
  render() {
    // const subj = this.props.subject;
    return (
      <div
        className="subject"
        onMouseEnter={this.onMouseCrossBoundary}
        onMouseLeave={this.onMouseCrossBoundary}
      >
        <p>{this.props.subject.title}</p>
        <p>
          {this.props.subject.eventsArray.length} {this.props.subject.unit}
        </p>
        {/* {this.state.isHovered && <p>mouse is in</p>}
        {!this.state.isHovered && <p>mouse is out</p>} */}
      </div>
    );
  }
}

export default Subject;
