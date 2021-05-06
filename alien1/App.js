import React from "react";
import { Alert } from "react-native";
import Loading from "./loading";
import Main from "./main"

export default class extends React.Component {
	state = {
		isLoading: true
	};

	render() {
		const { isLoading } = this.state;
		return isLoading ? (
			<Loading />
			):(<Main/>)
	}
}