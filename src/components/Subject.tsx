import React from "react";
import "./subject.css";
import { ISubject } from "../models/Subject";

type IState = {
  isHovered: boolean;
};
type IProps = {
  subject: ISubject;
  writeEvent: Function;
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
    const detailsString = `Total ${this.props.subject.eventsArray.length} ${this.props.subject.unit}
    in the last ${this.props.subject.TrackingPeriod}`;
    return (
      <div
        className="subject"
        onMouseEnter={this.onMouseCrossBoundary}
        onMouseLeave={this.onMouseCrossBoundary}
      >
        <p>{this.props.subject.title}</p>
        {!this.state.isHovered && (
          <div>
            <p>{detailsString}</p>
          </div>
        )}
        {this.state.isHovered && (
          <div>
            <button onClick={() => this.props.writeEvent()}>+</button>
            <input type={this.props.subject.unitInputType} />
          </div>
        )}
      </div>
    );
  }
}

export default Subject;
