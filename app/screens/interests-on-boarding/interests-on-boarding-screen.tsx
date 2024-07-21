import { ScrollView, StyleSheet, View } from "react-native"
import { FC, useMemo } from "react"
import { ScreenNames, ScreenNavigationProps } from "@navigation/index"
import { AppStore, useAppDispatch } from "@model/state/root-store"
import { palette, spacing } from "@theme/index"
import { Button, LoadingOverlay, TagSelector, Text, TextVariant } from "@components/index"
import { dictionary } from "@app/dictionary/dictionary"
import { useSelector } from "react-redux"
import { SlicesNames } from "@app/model/state/slices-names"
import { Interest } from "@app/model/entities/interest"
import { toggleInterest } from "@model/state/ui-slices/interests/interests-ui-slice"
import { saveUserInterestsAsync } from "@app/model/state/ui-slices/interests/interests-async-actions"
import { ReqState } from "@util/types"
import { usePreventGoBack } from "@app/hooks"

export const InterestsOnBoardingScreen: FC<ScreenNavigationProps> = ({ navigation }) => {

	usePreventGoBack()
	const dispatch = useAppDispatch()
	const interests: Interest[] = useSelector((state: AppStore) => state?.[SlicesNames.INTERESTS_UI]?.interests)
	const reqState: ReqState = useSelector((state: AppStore) => state?.[SlicesNames.INTERESTS_UI]?.reqState)

	const saveInterests = () => {
		dispatch(saveUserInterestsAsync(() => navigation.navigate(ScreenNames.HOME)))
	}

	const interestsSelectors = useMemo(() => {
		return dictionary.interests?.map((interest: Interest) => {
			const isActive = interests?.find(selectedInterest => interest?.id === selectedInterest?.id) != null
			const toggle = () => dispatch(toggleInterest(interest))
			return (
				<TagSelector
					key={interest.id}
					tx={interest.keyword}
					onToggle={toggle}
					isActive={isActive}
				/>
			)

		})
	}, [interests?.length])

	return (
		<ScrollView contentContainerStyle={styles.box}>
			<Text tx={dictionary.interestsOnBoarding?.title} variant={TextVariant.TITLE} />
			<Text tx={dictionary.interestsOnBoarding?.message} variant={TextVariant.PARAGRAPH} style={{ textAlign: "center" }} />
			<View style={styles.interestsBox}>
				{interestsSelectors}
			</View>
			{interests?.length > 3 &&
				<Button
					style={{ backgroundColor: palette.active }}
					tx={dictionary.interestsOnBoarding?.button}
					onPress={saveInterests}
				/>
			}
			<LoadingOverlay visible={reqState === ReqState.PENDING} />
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
		rowGap: 20,
		flexGrow: 1
	},
	interestsBox: {
		flexDirection: "row",
		rowGap: 10,
		columnGap: 10,
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center"
	}
})
