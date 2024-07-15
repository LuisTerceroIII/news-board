import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { Heading } from './heading'

interface ButtonProps {
	onPress?: () => void
	children?: React.ReactNode
	tx?: string
	style?: ViewStyle
}

const styles = StyleSheet.create({
	button: {
		width: 156,
		height: 40,
		borderRadius: 12,
		backgroundColor: "purple",
		color: "white",
		textAlign: "center",
		textAlignVertical: "center",
		justifyContent: "center",
		alignItems: "center"
	},
	tx: {
		color: "white",
		fontSize: 16,
		fontWeight: 600
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
