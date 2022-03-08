import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

const GoalItem = (props) => {
	return (
		<View style={styles.listItem}>
			<Text>{props.goal}</Text>
			<TouchableOpacity
				activeOpacity={0.5}
				onPress={props.onDelete.bind(this, props.id)}
				style={styles.deleteButton}
			>
				<Text style={{ color: "red" }}>X</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		padding: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
		marginVertical: 10,
	},
	deleteButton: {
		marginLeft: "auto",
	},
});

export default GoalItem;
