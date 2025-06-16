import { Component } from "react";
import { CustomCard } from "../Cards/Cards";
import "./proto.css";

export default class Portofolo extends Component {
  render() {
    return (
      <div className="portofolo-container">
        <CustomCard text="Web Developer" color="black" />
        <CustomCard text="Android" color="gray" />
        <CustomCard text="Flutter" color="black" />
        <CustomCard text="Angular" color="gray" />
        <CustomCard text="React" color="black" />
        <CustomCard text="React Native" color="gray" />
      </div>
    );
  }
}
