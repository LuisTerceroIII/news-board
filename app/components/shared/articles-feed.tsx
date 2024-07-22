import React, { FC, useMemo } from "react"
import { Article } from "@app/model/entities/article"
import { FlashList } from "@shopify/flash-list"
import { ArticleCard } from "@components/index"
import { StyleSheet } from "react-native"

interface ArticlesFeedProps {
	data: Article[]
}

export const ArticlesFeed: FC<ArticlesFeedProps> = (props) => {

	const { data } = props

	const articles = useMemo(() => {
		return ({ item }: { item: Article }) => {
			return <ArticleCard article={item} key={item?.id} style={{ paddingBottom: 21 }} />
		}
	}, [data?.length])

	return (
		<FlashList
			data={data}
			renderItem={articles}
			estimatedItemSize={200}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.articlesBox}
		/>
	)
}

const styles = StyleSheet.create({
	articlesBox: {
		paddingTop: 21,
	}
})