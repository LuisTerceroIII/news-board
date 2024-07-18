import React, { FC, forwardRef, RefObject } from 'react'
import { KeyboardType, StyleSheet, TextInput, View } from 'react-native'
import { Text, TextVariant } from './text'
import { palette } from '@theme/palette'
import { corners, width } from '@theme/spacing'
import { dictionary } from '@dictionary/dictionary'

interface FormFieldProps {
	ref?: any// this ref it just to complete the type, USE ref from forwardedRef
	value: string
	labelTx: string
	onChangeText: (str: string) => void
	onFocus?: () => void
	onBlur?: () => void
	keyboardType?: KeyboardType | undefined
	error?: boolean
	errorsTx?: string[]
	onSubmitEditing?: () => void
	secureTextEntry?: boolean
}

export const FormField: FC<FormFieldProps & { forwardedRef?: RefObject<TextInput> }> = forwardRef<TextInput, FormFieldProps>((props, ref) => {
	const {
		value, labelTx, keyboardType, onChangeText, onFocus, onBlur,
		error = false, errorsTx = [dictionary.errors?.generic_error], onSubmitEditing,
		secureTextEntry
	} = props

	const errors = errorsTx?.map(error => {
		return (
			<Text key={error} tx={error} variant={TextVariant.ERROR} />
		)
	})

	return (
		<View style={styles.container}>
			<Text tx={labelTx} variant={TextVariant.PARAGRAPH} />
			<TextInput
				ref={ref}
				value={value}
				style={[styles.input, error && styles.error]}
				onChangeText={onChangeText}
				onBlur={onBlur}
				onFocus={onFocus}
				keyboardType={keyboardType}
				onSubmitEditing={onSubmitEditing}
				secureTextEntry={secureTextEntry}
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
		backgroundColor: palette.white,
		width: width[9],
		borderRadius: corners[0],
	},
	error: {
		borderColor: palette.red,
		borderWidth: 1.5,
	},
})

