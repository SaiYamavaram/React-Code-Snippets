// import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
export default class App extends Component {
	state = { lat: null, long: null, errMsg: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude,
				});
			},
			err => this.setState({ errMsg: err.message })
		);
	}
	renderContent() {
		if (!this.state.errMsg && this.state.lat)
			return <SeasonDisplay lat={this.state.lat} />;
		else if (this.state.errMsg && !this.state.lat)
			return <div>Error: {this.state.errMsg} </div>;
		else return <Spinner message={"Acce pt Location Request"}></Spinner>;
	}
	render() {
		return <div className='border red'>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
