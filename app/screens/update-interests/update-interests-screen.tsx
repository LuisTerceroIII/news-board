import { ScrollView, StyleSheet, View } from "react-native"
import { FC } from "react"
import { ScreenNames, ScreenNavigationProps } from "@navigation/index"
import { AppStore, useAppDispatch } from "@model/state/root-store"
import { palette, spacing } from "@theme/index"
import { Text, TextVariant } from "@components/index"
import { dictionary } from "@app/dictionary/dictionary"
import { useSelector } from "react-redux"
import { SlicesNames } from "@app/model/state/slices-names"
import { Interest } from "@app/model/entities/interest"
import { saveUserInterestsAsync } from "@app/model/state/ui-slices/interests/interests-async-actions"
import { ReqState } from "@util/types"

export const UpdateInterestsScreen: FC<ScreenNavigationProps> = ({ navigation }) => {

	const dispatch = useAppDispatch()
	const interests: Interest[] = useSelector((state: AppStore) => state?.[SlicesNames.INTERESTS_UI]?.interests)
	const reqState: ReqState = useSelector((state: AppStore) => state?.[SlicesNames.INTERESTS_UI]?.reqState)

	const saveInterests = () => {
		dispatch(saveUserInterestsAsync(() => navigation.navigate(ScreenNames.HOME)))
	}

	return (
		<ScrollView contentContainerStyle={styles.box}>
			<Text tx={dictionary.interestsOnBoarding?.title} variant={TextVariant.TITLE} />
			<Text tx={dictionary.interestsOnBoarding?.message} variant={TextVariant.PARAGRAPH} style={{ textAlign: "center" }} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	box: {
		paddingTop: spacing.paddingTop[0],
		paddingBottom: spacing.paddingBottom[0],
		paddingHorizontal: spacing.paddingHorizontal,
		alignItems: "center",
		backgroundColor: palette.bg_primary,
		flexGrow: 1
	}
})
