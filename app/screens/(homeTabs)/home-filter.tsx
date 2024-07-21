import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "@components/index";
import { useAppDispatch } from "@model/state/root-store";
import { signOutAsync } from "@model/state/auth/auth-async-actions";
import { palette } from "@theme/index";

export const HomeFiltersScreen: FC = (): React.JSX.Element => {

	const dispatch = useAppDispatch()
	const signOut = () => dispatch(signOutAsync())

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.box}>
			<Button style={{ alignSelf: "center" }} tx="Cerrar session" onPress={signOut} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: palette.bg_primary,
		flexGrow: 1
	},
})

export default HomeFiltersScreen;
