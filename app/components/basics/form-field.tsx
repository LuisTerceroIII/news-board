import React, { FC, forwardRef, RefObject } from 'react'
import { KeyboardType, StyleSheet, View } from 'react-native'
import { Text, TextVariant } from './text'
import { palette } from '@theme/palette'
import { corners, width } from '@theme/spacing'
import { dictionary } from '@dictionary/dictionary'
import { Input, InputProps } from './input'

interface FormFieldProps extends InputProps {
	ref?: any// this ref it just to complete the type, USE ref from forwardedRef
	labelTx: string
	error?: boolean
	errorsTx?: string[]

}

export const FormField: FC<FormFieldProps & { forwardedRef?: RefObject<TextInput> }> = forwardRef<TextInput, FormFieldProps>((props, ref) => {
	const {
		value, labelTx, keyboardType, onChangeText, onFocus, onBlur,
		error = false, errorsTx = [dictionary.errors?.generic_error], onSubmitEditing,
		secureTextEntry, rightIcon = undefined,
		rightIconSize = 20, rightIconOnPress = undefined, rightIconColor=palette.disabled,
		rightIconStyle={}
	} = props

	const errors = errorsTx?.map(error => {
		return (
			<Text key={error} tx={error} variant={TextVariant.ERROR} />
		)
	})

	return (
		<View style={styles.container}>
			<Text tx={labelTx} variant={TextVariant.PARAGRAPH} />
			<Input
				ref={ref}
				value={value}
				style={[styles.input, error && styles.error]}
				onChangeText={onChangeText}
				onBlur={onBlur}
				onFocus={onFocus}
				keyboardType={keyboardType}
				onSubmitEditing={onSubmitEditing}
				secureTextEntry={secureTextEntry}
				rightIcon={rightIcon}
				rightIconSize={rightIconSize}
				rightIconOnPress={rightIconOnPress}
				rightIconColor={rightIconColor}
				rightIconStyle={rightIconStyle}
			/>
			{error && errors}
		</View>
	)
})

const styles = StyleSheet.create({
	container: {
		rowGap: 10,
	},
	input: {
		height: 38,
		backgroundColor: palette.bg_primary,
		width: width[9],
		borderRadius: corners[0],
	},
	error: {
		borderColor: palette.error,
		borderWidth: 1.5,
	},
})

