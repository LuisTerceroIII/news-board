import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ScreenNavigationProps } from "../../../navigation/routes";
import { useDispatch } from "react-redux";
import { palette } from "../../../theme/palette";
import { ActiveWordTitle } from "../../../components/shared/active-word-title";
import { dictionary } from "../../../dictionary/dictionary";

const styles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor: palette.primary
	},
	heading: {
		alignSelf: "center"
	}
})

export const RegisterScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const dispatch = useDispatch()

	return (
		<ScrollView contentContainerStyle={styles.box} contentInsetAdjustmentBehavior="automatic">
			<ActiveWordTitle txChain={[
				dictionary.welcomeOnBoarding?.slide_one_title_1 || "",
				dictionary.welcomeOnBoarding?.slide_one_title_2 || ""
			]} />
		</ScrollView>
	);
}

export default RegisterScreen;
