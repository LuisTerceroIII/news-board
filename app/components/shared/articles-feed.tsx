import React, { FC, useMemo } from "react"
import { Article } from "@app/model/entities/article"
import { FlashList } from "@shopify/flash-list"
import { ArticleCard, Spinner } from "@components/index"
import { StyleSheet } from "react-native"
interface ArticlesFeedProps {
	data: Article[]
	onEndReached?:() => void
	showLoading?: boolean
}

export const ArticlesFeed: FC<ArticlesFeedProps> = (props) => {

	const { data, onEndReached, showLoading=true } = props

	const articles = useMemo(() => {
		return ({ item }: { item: Article }) => {
			return (
				<ArticleCard
					key={item?.id} 
					article={item} 
					style={{ paddingBottom: 21 }} 
				/>
			)
		}
	}, [data?.length])

	return (
		<FlashList
			data={data}
			renderItem={articles}
			estimatedItemSize={295}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.articlesBox}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.5}
			ListFooterComponent={() => {
				return showLoading && <Spinner size={30}/>
			}}
			ListFooterComponentStyle={styles.loading}
		/>
	)
}

const styles = StyleSheet.create({
	articlesBox: {
		paddingTop: 21,
	},
	loading: {
		alignSelf: "center",
		paddingBottom: 20
	}
})