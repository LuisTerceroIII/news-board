import React, { useMemo } from "react"
import { ToggleBox } from "@app/components"
import { getInterests } from "@model/state/user/user-views"
import { spacing } from "@app/theme"
import { FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { Interest } from "@app/model/entities/interest"
import { getActionInterest, setActionInterest } from "@app/model/state/ui-slices/home/home-ui-slice"
import { useAppDispatch } from "@app/model/state/root-store"
import { MixInterest } from "@app/util/types"

export const HomeInterestsSelector = () => {

	const userInterests = useSelector(getInterests)
	const selectedInterest: Interest = useSelector(getActionInterest)
	const dispatch = useAppDispatch()

	const interests = useMemo(() => {
		return ({ item }: { item: Interest }) => {
			const isSelected = item?.id === selectedInterest?.id
			const selectInterest = () => dispatch(setActionInterest(item))
			return (
				<ToggleBox
					tx={`#${item?.label}`}
					isActive={isSelected}
					onPress={selectInterest}
				/>
			)
		}
	}, [userInterests?.length, selectedInterest?.id])

	return (
		<FlatList
			data={[MixInterest, ...userInterests]}
			renderItem={interests}
			horizontal
			contentContainerStyle={styles.box}
			showsHorizontalScrollIndicator={false}
		/>
	)
}

const styles = StyleSheet.create({
	box: {
		columnGap: 20,
		paddingHorizontal: spacing.paddingHorizontal,
		marginTop: 10,
		paddingBottom: 10
	}
})
