import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [addMode, setAddMode] = useState(false);

	const addGoalHandler = (goal) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: Math.random().toString(), value: goal },
		]);
		setAddMode(false);
	};

	const removeGoalHandler = (goalKey) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== goalKey);
		});
	};

	const cancelButton = () => {
		setAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setAddMode(true)} />
			<GoalInput
				cancel={cancelButton}
				visible={addMode}
				addGoalHandler={addGoalHandler}
			/>
			<FlatList
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						id={itemData.item.key}
						onDelete={removeGoalHandler}
						goal={itemData.item.value}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
