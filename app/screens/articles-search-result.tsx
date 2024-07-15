import { useEffect, useMemo } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../model/state/root-store";
import { getRequestState, getResultArticles, searchByKeywordAsync, setActionArticle } from "../model/state/ui-slices/search-article-slice";
import { ArticleCard } from "../components/basics/seach-flow/article-card";
import { Heading } from "../components/basics/heading";

export default function ArticlesSearchResult({route, navigation}) {
	
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
		<>
			<Heading tx={keyword || ""} variant="title" style={{paddingHorizontal: "5%"}}/>
			{requestState === "pending" ? <ActivityIndicator /> : (
				<View style={{rowGap: 20, paddingTop: 20, paddingHorizontal: "5%"}}>
					{newsResults}
				</View>
			)}
		</>
	);
}
