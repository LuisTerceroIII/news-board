import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { SvgIcon } from '../../components/basics/icon/svg-icon'
import { Text, TextVariant } from '../../components/basics/text'
import { dictionary } from '../../dictionary/dictionary'
import { palette } from '../../theme/palette'
import { corners, width } from '../../theme/spacing'

interface GoogleButtonProps {
	tx: string
	onPress?: () => void
	style?: ViewStyle
}

export const GoogleButton: FC<GoogleButtonProps> = (props) => {

	const { tx, onPress, style } = props

	return (
		<TouchableOpacity
			style={[styles.box, style]}
			onPress={onPress}
		>
			<SvgIcon icon="google" width={40} />
			<Text
				tx={tx}
				variant={TextVariant.PARAGRAPH}
				style={{ color: palette.primary}}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	box: {
		width: width[9],
		paddingVertical: 26,
		backgroundColor: palette.white,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: corners[0],
		flexDirection: "row",
		columnGap: 10,
		paddingHorizontal: 29
	}
})
