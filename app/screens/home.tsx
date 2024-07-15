import React, { FC } from "react";
import { ScreenNames } from "../navigation/screen-names";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "../components/basics/heading";
import { Input } from "../components/basics/input";
import { getKeyword, onChangeKeyword } from "../model/state/ui-slices/search-article-slice";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { Button } from "../components/basics/button";
import { ScreenNavigationProps } from "../navigation/routes";

const styles = StyleSheet.create({
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

export const Home: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const keywordFilter = useSelector(getKeyword)
	const dispatch = useDispatch()

	const onChangeText = (keyword: string) => {
		dispatch(onChangeKeyword({keyword}))
	}

	const search = () => navigation.navigate(ScreenNames.SEARCH_RESULT, { keyword: keywordFilter })

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<KeyboardAvoidingView behavior="padding">
				<Heading tx="Tus News" variant="title" style={styles.heading} />
				<Input value={keywordFilter} onChangeText={onChangeText} style={styles.searchNewsInput} onSubmitEditing={search} />
				<Button style={{ alignSelf: "center" }} tx="Buscar" onPress={search} />
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

export default Home;
