import React, { FC } from "react";
import { ScreenNames } from "../navigation/screen-names";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../components/basics/input";
import { getKeyword, onChangeKeyword } from "../model/state/ui-slices/search-article-slice";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { Button } from "../components/basics/button";
import { ScreenNavigationProps } from "../navigation/routes";
import { Text, TextVariant } from "../components/basics/text";
import { SlicesNames } from "../model/state/slices-names";
import { AppStore } from "../model/state/root-store";
import { palette } from "../theme/palette";

export const Home: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const keywordFilter = useSelector(getKeyword)
	const { id, email, username, registerAt, name } = useSelector(( state: AppStore ) => state?.[SlicesNames.USER])
	const dispatch = useDispatch()

	const onChangeText = (keyword: string) => {
		dispatch(onChangeKeyword({keyword}))
	}

	const search = () => navigation.navigate(ScreenNames.SEARCH_RESULT, { keyword: keywordFilter })

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.box}>
			<KeyboardAvoidingView behavior="padding">
				<Text tx="Tus News" variant={TextVariant.TITLE} style={styles.heading} />
				<Input value={keywordFilter} onChangeText={onChangeText} style={styles.searchNewsInput} onSubmitEditing={search} />
				<Button style={{ alignSelf: "center" }} tx="Buscar" onPress={search} />
				<Text tx={JSON.stringify({
					id,
					email,
					username,
					name,
					registerAt
				}, null, 2)} variant={TextVariant.PARAGRAPH} />
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
