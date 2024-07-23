import React, { FC } from "react"
import { palette } from "@theme/index"
import { StyleSheet, View } from "react-native"
import { ArticlesFeed } from "@app/components"
import { useSelector } from "react-redux"
import { getGlobalFeed, globalFeedReq } from "@app/model/state/ui-slices/home/home-ui-slice"
import { useAppDispatch } from "@app/model/state/root-store"
import { fetchGlobalFeedAsync } from "@app/model/state/ui-slices/home/home-ui-async-actions"
import { ReqState } from "@app/util/types"

export const HomeGlobalFeedScreen: FC = (): React.JSX.Element => {

	const articlesFeed = useSelector(getGlobalFeed)
	const reqState = useSelector(globalFeedReq)
	const dispatch = useAppDispatch()

	const loadMore = () => dispatch(fetchGlobalFeedAsync())

	return (
		<View style={styles.box}>
			<ArticlesFeed 
				data={articlesFeed}
				onEndReached={loadMore}
				showLoading={reqState === ReqState.PENDING}
			/>
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
