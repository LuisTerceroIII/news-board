import React, { FC } from "react"
import { palette } from "@theme/index"
import { StyleSheet, View } from "react-native"
import { ArticlesFeed } from "@app/components"
import { useSelector } from "react-redux"
import { getUserFeed } from "@app/model/state/ui-slices/home/home-ui-slice"

export const HomeGlobalFeedScreen: FC = (): React.JSX.Element => {

	const articlesFeed = useSelector(getUserFeed)

	return (
		<View style={styles.box}>
			<ArticlesFeed data={articlesFeed} />
		</View >
	)
}

const styles = StyleSheet.create({
	box: {
		flexGrow: 1,
		backgroundColor: palette.bg_primary,
	}

})

export default HomeGlobalFeedScreen
