import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
	return (
	<View style={styles.container}>
	    <StatusBar barStyle="dark-content" />
		<Text style={styles.text}>Alien</Text>
	</View>
	);
}

const styles = Stylesheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: "#add8e6"
	},
	text: {
		color: "#2c2c2c",
		fontSize: 30
	},
});	