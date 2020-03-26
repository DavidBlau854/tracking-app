import React from "react";
import "./subject.css";
import { ISubject } from "../models/Subject";
import plusImage from "../assets/img/plusSign.png";

type IState = {
  isHovered: boolean;
  isAddClicked: boolean;
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
    this.state = { isHovered: false, isAddClicked: false };
    this.onMouseCrossBoundary = this.onMouseCrossBoundary.bind(this);
  }

  onAddClick() {
    this.setState({ isAddClicked: true });
    setTimeout(() => this.setState({ isAddClicked: false }), 750);
    this.props.writeEvent();
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
        <p>{detailsString}</p>
        <img
          className={`plus-image ${this.state.isAddClicked ? "pressed" : null}`}
          src={plusImage}
          alt="add"
          onClick={() => this.onAddClick()}
        ></img>
      </div>
    );
  }
}

export default Subject;
