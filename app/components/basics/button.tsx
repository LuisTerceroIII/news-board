import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { Heading } from './heading'
import { palette } from '../../theme/palette'

interface ButtonProps {
	onPress?: () => void
	children?: React.ReactNode
	tx?: string
	style?: ViewStyle
}

const styles = StyleSheet.create({
	button: {
		width: 156,
		height: 47,
		borderRadius: 12,
		paddingHorizontal: 25,
		backgroundColor: palette.secondary,
		color: palette.white,
		textAlign: "center",
		textAlignVertical: "center",
		justifyContent: "center",
		alignItems: "center"
	},
	tx: {
		color: palette.white,
		fontSize: 18,
		fontWeight: 800
	}
})

export const Button: FC<ButtonProps> = (props) => {

	const { onPress, children, tx, style } = props

	const hasChild = children != null

	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			{hasChild ? children : <Heading variant='subTitle' tx={tx || ""} style={styles.tx} />}
		</TouchableOpacity>
	)
}
