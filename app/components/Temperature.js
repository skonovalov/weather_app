import React, {Component} from "react";

/*export default function Temperature(props) {
    return <div>{props.temp}</div>;
}*/

export default class Temperature extends Component {
    render() {
        return <div className="temp">{this.props.name} &deg;</div>;
    }
}