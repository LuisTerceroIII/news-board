import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, TextVariant } from '../basics/text'
import { corners, palette } from '@app/theme'

interface ToggleBoxProps {
	onPress?: () => void
	tx: string,
	isActive: boolean,
	disabled?: boolean
}
export const ToggleBox: FC<ToggleBoxProps> = (props) => {

	const { onPress, tx, isActive, disabled = false } = props
	
	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.box,
				{ backgroundColor: isActive ? palette.primary : palette.inactive }
			]}
		>
			<Text
				tx={tx}
				variant={TextVariant.SUBTITLE}
				style={{color: palette.secondary}}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	box: {
		paddingVertical: 5,
		paddingHorizontal: 11,
		borderRadius: corners[1]
	}
})

