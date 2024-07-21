import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, SvgIcon, Text, TextVariant, UserAvatar } from '@components/index'
import { useSelector } from 'react-redux'
import { getKeyword, onChangeKeyword } from '@app/model/state/ui-slices/search-article-slice'
import { useAppDispatch } from '@app/model/state/root-store'
import { navigate, ScreenNames } from '@app/navigation'
import { palette, reponsiveW, width } from '@app/theme'
import { dictionary } from '@app/dictionary/dictionary'

export const HomeHeader = () => {
	const keywordFilter = useSelector(getKeyword)
	const dispatch = useAppDispatch()

	const onChangeText = (keyword: string) => {
		dispatch(onChangeKeyword({ keyword }))
	}
	const search = () => navigate(ScreenNames.SEARCH_RESULT, { keyword: keywordFilter })

	return (
		<View style={styles.box}>
			<Text variant={TextVariant.LOGO_SUBTITLE} tx='NB'/>
			<Input 
				value={keywordFilter} 
				onChangeText={onChangeText} 
				style={styles.searchNewsInput} 
				onSubmitEditing={search} 
				placeholderTx={dictionary.homeFilter?.search}
				placeholderTextColor={palette.grey}
				rightIcon='search'
				rightIconColor={palette.grey}
				rightIconSize={20}
				rightIconOnPress={keywordFilter?.length > 0 ? search : undefined}
			/>
			<UserAvatar onPress={() => console.log("Ir a screen de profile")}/>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: palette.secondary,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: reponsiveW("5%"),
		columnGap: reponsiveW("2%"),
		height: 78
	},
	searchNewsInput: {
		marginVertical: 20,
		width:  width[6],
		alignSelf: "center",
		borderRadius: 100,
		borderColor: palette.active,
		borderWidth: 1.2,
		color: palette.white
	}
})
