import { FC, useEffect, useMemo } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@model/state/root-store";
import { getRequestState, getResultArticles, searchByKeywordAsync, setActionArticle } from "@model/state/ui-slices/search-article-slice";
import { ArticleCard, Text, TextVariant } from "@components/index";
import { ScreenNavigationProps } from "@navigation/index";
import { palette } from "@app/theme";

export const ArticlesSearchResult: FC<ScreenNavigationProps> = ({route, navigation}) => {
	
	const { keyword } = route?.params
	const dispatch = useAppDispatch()
	const resultArticles = useSelector(getResultArticles)
	const requestState = useSelector(getRequestState)
	
	useEffect(() => {
		dispatch(searchByKeywordAsync(keyword || ""))
	}, [])

	const newsResults = useMemo(() => {	
		return resultArticles?.map((article: any) => {
			const goToNew = () => {
				dispatch(setActionArticle({article}))
				navigation.navigate("article")
			}
			return <ArticleCard article={article} onPress={goToNew} key={article?.url} />
		})
	}, [resultArticles?.length, keyword])

	return (
		<View style={{ backgroundColor: palette.bg_primary}}>
			<Text
				tx={keyword} 
				variant={TextVariant.SUBTITLE} 
				style={{paddingHorizontal: "5%"}}
			/>
			{requestState === "pending" ? <ActivityIndicator /> : (
				<ScrollView contentContainerStyle={{rowGap: 20, paddingTop: 20, paddingHorizontal: "5%"}}>
					{newsResults}
				</ScrollView>
			)}
		</View>
	);
}
