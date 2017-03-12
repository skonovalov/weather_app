import React, {Component} from "react";

/*export default function City(props) {
    return <div>{props.city}</div>;
}*/

export default class City extends Component {
    render() {
        return <div>{this.props.city}</div>;
    }
}