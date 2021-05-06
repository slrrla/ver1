import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Main from "./Main";

export default class extends React.Component {
	state = {
		isLoading: true
	};
	
	/*getData = {
		this.setState({
			isLoadig: false
		});
	}*/
	render() {
		const { isLoading } = this.state;
		return isLoading ? (
			<Loading />
		) : (
			<Main />
		);
	}
}