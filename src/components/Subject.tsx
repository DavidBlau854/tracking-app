import React from "react";
import "./subject.css";

interface Iprops {
  title: string;
}

interface IState {
  isHovered: boolean;
}

class Subject extends React.Component {
  props: Iprops;
  state: IState;

  constructor(props: Iprops) {
    super(props);
    this.props = props;
    this.state = { isHovered: false };
    this.onMouseCrossBoundary = this.onMouseCrossBoundary.bind(this);
  }

  onMouseCrossBoundary() {
    this.setState({ isHovered: !this.state.isHovered });
  }
  render() {
    return (
      <div
        className="subject"
        onMouseEnter={this.onMouseCrossBoundary}
        onMouseLeave={this.onMouseCrossBoundary}
      >
        <p>{this.props.title}</p>
        {this.state.isHovered && <p>mouse is in</p>}
        {!this.state.isHovered && <p>mouse is out</p>}
      </div>
    );
  }
}

export default Subject;
