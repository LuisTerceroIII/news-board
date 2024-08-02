import { FC, useMemo } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { ScreenNames, ScreenNavigationProps } from "@navigation/index"
import { AppStore, useAppDispatch } from "@model/state/root-store"
import { palette, spacing } from "@theme/index"
import { Button, Input, TagSelector, Text, TextVariant } from "@components/index"
import { dictionary } from "@app/dictionary/dictionary"
import { useSelector } from "react-redux"
import { SlicesNames } from "@app/model/state/slices-names"
import { Interest } from "@app/model/entities/interest"
import { saveUserInterestsAsync } from "@app/model/state/ui-slices/interests/interests-async-actions"
import { ReqState } from "@util/types"
import { getInterests } from "@app/model/state/user/user-views"
import { toggleInterest } from "@app/model/state/ui-slices/interests/interests-ui-slice"

export const UpdateInterestsScreen: FC<ScreenNavigationProps> = ({ navigation }) => {

	const dispatch = useAppDispatch()
	const interests: Interest[] = useSelector((state: AppStore) => state?.[SlicesNames.INTERESTS_UI]?.interests)
	const reqState: ReqState = useSelector((state: AppStore) => state?.[SlicesNames.INTERESTS_UI]?.reqState)
	const userInterests: Interest[] = useSelector(getInterests)

	const saveInterests = () => {
		dispatch(saveUserInterestsAsync(() => navigation.navigate(ScreenNames.HOME)))
	}

	const suggestsInterests = useMemo(() => {
		return dictionary.interests?.map((interest: Interest) => {
			const isActive = userInterests?.find(userInterest => userInterest?.id === interest?.id) != null
			const toggle = () => dispatch(toggleInterest(interest))
			return (
				<TagSelector
					key={interest.id}
					tx={interest.label || ""}
					onToggle={toggle}
					isActive={isActive}
				/>
			)

		})
	}, [interests?.length])

	return (
		<>
			<ScrollView contentContainerStyle={styles.box} showsVerticalScrollIndicator={false}>
				{true ?
					<Text tx={dictionary.editInterests?.message} variant={TextVariant.PARAGRAPH} />
					:
					<Text tx={dictionary.editInterests?.error} variant={TextVariant.ERROR} />
				}
				<Text tx={dictionary.editInterests?.custom_title} variant={TextVariant.TITLE} />
				<Text tx={dictionary.editInterests?.custom_message} variant={TextVariant.PARAGRAPH} />
				<Input
					placeholderTx={dictionary.editInterests?.custom_placeholder}
				/>
				<View style={styles.customInterestsBox}>
					{suggestsInterests}
				</View>
				<Text tx={dictionary.editInterests?.suggests_title} variant={TextVariant.TITLE} />
				<View style={styles.suggestInterestsBox}>
					{suggestsInterests}
				</View>
			</ScrollView>
			{true &&
				<Button
					style={styles.saveButton}
					tx={dictionary.interestsOnBoarding?.button}
					onPress={saveInterests}
				/>
			}
		</>
	)
}

const styles = StyleSheet.create({
	box: {
		paddingTop: spacing.paddingTop[1],
		paddingBottom: spacing.paddingBottom[0] * 3,
		paddingHorizontal: spacing.paddingHorizontal,
		backgroundColor: palette.bg_primary,
		flexGrow: 1,
		rowGap: 10
	},
	customInterestsBox: {
		flexDirection: "row",
		rowGap: 10,
		columnGap: 10,
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center"
	},
	suggestInterestsBox: {
		flexDirection: "row",
		rowGap: 10,
		columnGap: 10,
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center"
	},
	saveButton: {
		backgroundColor: palette.primary,
		position: "absolute",
		bottom: 30,
		alignSelf: "center"
	}
})
