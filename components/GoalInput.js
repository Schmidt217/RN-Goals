import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);

	const addGoal = () => {
		props.addGoalHandler(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonGroup}>
					<View style={styles.button}>
						<Button title="ADD" onPress={addGoal} />
					</View>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={props.cancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderBottomWidth: 1,
		padding: 10,
		marginBottom: 10,
	},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
	},
	button: {
		width: "40%",
	},
});

export default GoalInput;
