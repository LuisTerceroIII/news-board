import { palette } from "@app/theme"
import React, { FC, forwardRef, RefObject } from "react"
import { KeyboardType, StyleSheet, TextInput, View, ViewStyle } from "react-native"
import { SvgIcon } from "./icon/svg-icon"
import { IconSvgTypes } from "./icon/icons-svg.types"

export interface InputProps {
	ref?: any
	onChangeText: (s: string) => void
	value: string
	onBlur?: () => void
	onFocus?: () => void
	style?: ViewStyle | ViewStyle[]
	keyboardType?: KeyboardType
	placeholderTx?: string
	onSubmitEditing?: () => void
	placeholderTextColor?: string
	rightIcon?: IconSvgTypes
	rightIconSize?: number
	rightIconOnPress?: () => void
	rightIconColor?: string
	rightIconStyle?: ViewStyle
	secureTextEntry?: boolean
}

export const Input: FC<InputProps & { forwardedRef?: RefObject<TextInput> }> = forwardRef<TextInput, InputProps>((props, ref) => {

	const {
		onChangeText, value, onBlur, onFocus, onSubmitEditing,
		placeholderTextColor, placeholderTx, style, rightIcon = undefined,
		rightIconSize = 20, rightIconOnPress = undefined, rightIconColor=palette.disabled,
		rightIconStyle={}, secureTextEntry=false, keyboardType
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
				keyboardType={keyboardType}
				placeholder={placeholderTx}
				placeholderTextColor={placeholderTextColor}
				secureTextEntry={secureTextEntry}
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
})

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
		paddingRight: 25,
		backgroundColor: palette.bg_primary,
		color: palette.primary
	},
	rightIcon: {
		position: "absolute",
		right: 15,
		top: 8.8
	}
})

