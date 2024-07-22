import React, { FC, useEffect, useMemo, useState } from "react"
import { palette, spacing, width } from "@theme/index"
import { usePreventGoBack } from "@app/hooks"
import { StyleSheet, Text } from "react-native"
import { FlashList } from "@shopify/flash-list"
import { ArticleCard } from "@app/components"
import { data } from "@assets/mock-data/articles-dummy"
import { Article } from "@app/model/entities/article"

export const HomeScreen: FC = (): React.JSX.Element => {
	usePreventGoBack()

	const articles = useMemo(() => {
		return ({item} : {item: Article}) => {
			return <ArticleCard article={item} key={item?.id} style={{paddingBottom: 21}} />
		}
	}, [])

	return (
		<FlashList
			data={data.data}
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
		backgroundColor: palette.bg_primary
	}
})

export default HomeScreen
