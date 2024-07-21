import { palette } from "@app/theme"
import React, { FC } from "react"
import { KeyboardType, StyleSheet, TextInput, View, ViewStyle } from "react-native"
import { SvgIcon } from "./icon/svg-icon"
import { IconSvgTypes } from "./icon/icons-svg.types"

interface InputProps {
	ref?: any
	onChangeText: (s: string) => void
	value: string
	onBlur?: () => void
	onFocus?: () => void
	style?: ViewStyle
	keyboardType?: KeyboardType
	placeholderTx?: string
	onSubmitEditing?: () => void
	placeholderTextColor?: string
	rightIcon?: IconSvgTypes
	rightIconSize?: number
	rightIconOnPress?: () => void
	rightIconColor?: string
	rightIconStyle?: ViewStyle
}

export const Input: FC<InputProps> = (props) => {

	const {
		ref, onChangeText, value, onBlur, onFocus, onSubmitEditing,
		placeholderTextColor, placeholderTx, style, rightIcon = undefined,
		rightIconSize = 20, rightIconOnPress = undefined, rightIconColor=palette.grey,
		rightIconStyle={}
	} = props

	return (
		<View style={styles.box}>
			<TextInput
				ref={ref}
				value={value}
				onChangeText={onChangeText}
				onBlur={onBlur}
				onFocus={onFocus}
				style={[styles.input, style]}
				onSubmitEditing={onSubmitEditing}
				placeholder={placeholderTx}
				placeholderTextColor={placeholderTextColor}
			/>
			{rightIcon != null &&
				<SvgIcon
					icon={rightIcon}
					width={rightIconSize}
					onPress={rightIconOnPress}
					linesColor={rightIconColor}
					containerStyle={[styles.rightIcon, rightIconStyle]}
				/>}
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		flexDirection: "row",
		position: "relative",
		height: 38,
		borderRadius: 12
	},
	input: {
		height: 38,
		borderWidth: 2,
		padding: 10,
		borderRadius: 12,
		width: "100%",
		paddingRight: 25
	},
	rightIcon: {
		position: "absolute",
		right: 15,
		top: 8.8
	}
})

