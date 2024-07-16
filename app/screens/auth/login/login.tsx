import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ScreenNavigationProps } from "../../../navigation/routes";
import { Heading } from "../../../components/basics/heading";


const styles = StyleSheet.create({
	heading: {
		alignSelf: "center"
	}
})

export const LoginScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<Heading tx="Login" variant="title" style={styles.heading} />
		</ScrollView>
	);
}

export default LoginScreen;
