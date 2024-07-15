import React from "react";
import type { PropsWithChildren } from "react";
import {
	Button,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";
import { getFullName } from "./../model/state/user/user-slice" 

import { ScreenNames } from "../navigation/screen-names";
import { navigate } from "../navigation/root-navigation";
import { useSelector } from "react-redux";

export const Home = ({ route, navigation }): React.JSX.Element => {

	const currentUserFullName = useSelector(getFullName)
	const isDarkMode = useColorScheme() === 'dark';

	const { name, ocupation } = route?.params;

	const goToDetail = () => {
		navigate(ScreenNames.DETAIL);
	};

	return (
	
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<View>
					<Text>
						Bienvenido otra vez: {currentUserFullName}
					</Text>
					<Button onPress={goToDetail} title="Go to Detail" />
				</View>
			</ScrollView>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
	},
	highlight: {
		fontWeight: "700",
	},
});

export default Home;
