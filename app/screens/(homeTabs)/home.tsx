import React, { FC } from "react"
import { palette, spacing } from "@theme/index"
import { usePreventGoBack } from "@app/hooks"
import { StyleSheet, View } from "react-native"
import { ArticlesFeed, SvgIcon, Text, TextVariant } from "@app/components"
import { HomeInterestsSelector } from "./components/home-interests-selector"
import { data } from "@assets/mock-data/articles-dummy"
import { dictionary } from "@app/dictionary/dictionary"

export const HomeScreen: FC = (): React.JSX.Element => {

	usePreventGoBack()

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
			<ArticlesFeed data={data.data} />
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		flexGrow: 1,
		backgroundColor: palette.bg_primary,
		
	},
	selectorBox: {
		marginTop: 24,
	},
	titleBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: spacing.paddingHorizontal,
	}
})

export default HomeScreen
