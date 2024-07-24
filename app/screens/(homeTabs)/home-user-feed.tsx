import React, { FC } from "react"
import { palette, spacing } from "@theme/index"
import { usePreventGoBack } from "@app/hooks"
import { Alert, StyleSheet, View } from "react-native"
import { ArticlesFeed, SvgIcon, Text, TextVariant } from "@app/components"
import { HomeInterestsSelector } from "./components/home-interests-selector"
import { dictionary } from "@app/dictionary/dictionary"
import { useSelector } from "react-redux"
import { actionInterestFeedReq, getUserFeed, userMixFeedReq, viewingMixFeed } from "@app/model/state/ui-slices/home/home-ui-slice"
import { useAppDispatch } from "@app/model/state/root-store"
import { fetchUserMixFeedAsync } from "@app/model/state/ui-slices/home/home-ui-async-actions"
import { ReqState } from "@app/util/types"

export const HomeUserFeedScreen: FC = (): React.JSX.Element => {

	usePreventGoBack()

	const articlesFeed = useSelector(getUserFeed)
	const viewingMixNews = useSelector(viewingMixFeed)
	const mixFeedLoading = useSelector(userMixFeedReq)
	const actionInterestFeedLoading = useSelector(actionInterestFeedReq)
	const dispatch = useAppDispatch()

	const loadNews = () => {
		if (viewingMixNews) dispatch(fetchUserMixFeedAsync())
		else Alert.alert("Implementar action interest feed")
	}

	return (
		<View style={styles.box}>
			<View style={styles.selectorBox}>
				<View style={styles.titleBox}>
					<Text
						tx={dictionary.homeFeed?.your_interests}
						variant={TextVariant.TITLE}
					/>
					<SvgIcon
						icon="add"
						linesColor={palette.primary}
						width={30}
						onPress={() => console.log("Hollaaa")}
					/>
				</View>
				<HomeInterestsSelector />
			</View>
			<ArticlesFeed
				data={articlesFeed}
				onEndReached={loadNews}
				showLoading={viewingMixNews ? mixFeedLoading === ReqState.PENDING : actionInterestFeedLoading === ReqState.PENDING}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		flexGrow: 1,
		backgroundColor: palette.bg_primary,
	},
	selectorBox: {
		marginTop: 10,
	},
	titleBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: spacing.paddingHorizontal,
	}
})

export default HomeUserFeedScreen
