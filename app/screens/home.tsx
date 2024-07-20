import React, { FC } from "react";
import { useSelector } from "react-redux";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { ScreenNames, ScreenNavigationProps } from "@navigation/index";
import { Input, Button, Text, TextVariant } from "@components/index";
import { getKeyword, onChangeKeyword } from "@model/state/ui-slices/search-article-slice";
import { SlicesNames } from "@model/state/slices-names";
import { AppStore, useAppDispatch } from "@model/state/root-store";
import { signOutAsync } from "@model/state/auth/auth-async-actions";
import { palette } from "@theme/index";

export const Home: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const keywordFilter = useSelector(getKeyword)
	const { submitState } = useSelector((state: AppStore) => state.authSlice)
	const { id, email, fullName, registerAt, interests } = useSelector(( state: AppStore ) => state?.[SlicesNames.USER])
	const dispatch = useAppDispatch()

	const onChangeText = (keyword: string) => {
		dispatch(onChangeKeyword({keyword}))
	}

	const search = () => navigation.navigate(ScreenNames.SEARCH_RESULT, { keyword: keywordFilter })
	const signOut = () => dispatch(signOutAsync())

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.box}>
			<KeyboardAvoidingView behavior="padding">
				<Text tx="Tus News" variant={TextVariant.TITLE} style={styles.heading} />
				<Input value={keywordFilter} onChangeText={onChangeText} style={styles.searchNewsInput} onSubmitEditing={search} />
				<Button style={{ alignSelf: "center" }} tx="Buscar" onPress={search} />
				<Text tx={JSON.stringify({
					id,
					email,
					fullName,
					registerAt,
					interests
				}, null, 2)} variant={TextVariant.PARAGRAPH} />
				<Button style={{ alignSelf: "center" }} tx="Cerrar session" onPress={signOut} />
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: palette.primary,
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
	subtitle: {
		color: "purple",
		marginVertical: 20,
		alignSelf: "flex-start"
	},
	link: {
		color: "white",
		fontSize: 16,
		fontWeight: 600
	}
})

export default Home;
