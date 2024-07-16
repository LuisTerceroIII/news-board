import React, { FC, RefObject } from 'react'
import { KeyboardType, StyleSheet, TextInput, View } from 'react-native'
import { Text, TextVariant } from './text'
import { palette } from '../../theme/palette'
import { corners, width } from '../../theme/spacing'

interface FormFieldProps {
	ref?: RefObject<TextInput>
	value: string
	labelTx: string
	onChangeText: () => void
	onFocus?: () => void
	onBlur?: () => void
	keyboardType?: KeyboardType | undefined
}

export const FormField: FC<FormFieldProps> = (props) => {

	const { ref, value, labelTx, keyboardType, onChangeText, onFocus, onBlur } = props

	return (
		<View style={styles.container}>
			<Text
				tx={labelTx}
				variant={TextVariant.PARAGRAPH}
			/>
			<TextInput 
				ref={ref}
				value={value}
				style={styles.input}
				onChangeText={onChangeText}
				onBlur={onBlur}
				onFocus={onFocus}
				keyboardType={keyboardType}
			/> 
		</View>
  	)
}

const styles = StyleSheet.create({
	container: {
		rowGap: 10
	},
	input: {
		height: 38,
		backgroundColor: palette.white,
		width: width[0],
		borderRadius: corners[0]
	}
})
