import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { Text, TextVariant, SvgIcon } from '@components/index'
import { corners, width, palette } from '@theme/index'
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
				style={{ color: palette.bg_primary}}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	box: {
		width: width[9],
		paddingVertical: 26,
		backgroundColor: palette.primary,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: corners[0],
		flexDirection: "row",
		columnGap: 10,
		paddingHorizontal: 40
	}
})
