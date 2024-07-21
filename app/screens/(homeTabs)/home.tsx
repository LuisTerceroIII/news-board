import React, { FC } from "react";
import { useSelector } from "react-redux";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { navigate, ScreenNames } from "@navigation/index";
import { Input, Button, Text, TextVariant, LoadingOverlay } from "@components/index";
import { getKeyword, onChangeKeyword } from "@model/state/ui-slices/search-article-slice";
import { SlicesNames } from "@model/state/slices-names";
import { AppStore, useAppDispatch } from "@model/state/root-store";
import { signOutAsync } from "@model/state/auth/auth-async-actions";
import { palette } from "@theme/index";
import { hasInterests } from "@app/model/state/user/user-views";
import { usePreventGoBack } from "@app/hooks";

export const HomeScreen: FC = (): React.JSX.Element => {

	usePreventGoBack()
	const keywordFilter = useSelector(getKeyword)
	const { submitState } = useSelector((state: AppStore) => state.authSlice)
	const { id, email, fullName, registerAt, interests } = useSelector(( state: AppStore ) => state?.[SlicesNames.USER])
	const userHasInterests = useSelector(hasInterests)
	const dispatch = useAppDispatch()

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.box}>
			<KeyboardAvoidingView behavior="padding">
				<LoadingOverlay visible />
				<Text tx="Tus News" variant={TextVariant.TITLE} style={styles.heading} />
				<Text tx={JSON.stringify({
					id,
					email,
					fullName,
					registerAt,
					interests
				}, null, 2)} variant={TextVariant.PARAGRAPH} />
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: palette.bg_primary,
		flexGrow: 1
	},
	heading: {
		color: "purple",
		alignSelf: "center"
	},
	searchNewsInput: {
		marginVertical: 20,
		width:  "95%",
		alignSelf: "center"
	},
	link: {
		color: "white",
		fontSize: 16,
		fontWeight: 600
	}
})

export default HomeScreen;
