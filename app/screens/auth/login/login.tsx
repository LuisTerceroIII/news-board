import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ScreenNavigationProps } from "../../../navigation/routes";


const styles = StyleSheet.create({
	heading: {
		alignSelf: "center"
	}
})

export const LoginScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			
		</ScrollView>
	);
}

export default LoginScreen;
