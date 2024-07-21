import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { palette, width } from '@theme/index'
import { Text, TextVariant } from './text'

interface ButtonProps {
	onPress?: () => void
	children?: React.ReactNode
	tx?: string
	style?: ViewStyle
}

const styles = StyleSheet.create({
	button: {
		maxWidth: width[5],
		minWidth: width[4],
		height: 47,
		borderRadius: 12,
		paddingHorizontal: 25,
		backgroundColor: palette.primary,
		color: palette.secondary,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center"
	},
	tx: {
		color: palette.secondary,
		fontSize: 18,
		fontWeight: 800
	}
})

export const Button: FC<ButtonProps> = (props) => {

	const { onPress, children, tx, style } = props

	const hasChild = children != null

	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			{hasChild ? children : <Text variant={TextVariant.SUBTITLE} tx={tx || ""} style={styles.tx} />}
		</TouchableOpacity>
	)
}
