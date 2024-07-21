import { palette, paletteType } from '@app/theme'
import React, { FC } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { Text, TextVariant } from '../basics/text'

interface TagSelectorProps {
	tx: string
	isActive: boolean
	onToggle: () => void
	activeColor?: paletteType
	idleColor?: paletteType
}

export const TagSelector: FC<TagSelectorProps> = (props) => {

	const { onToggle, tx, isActive, activeColor = "active", idleColor = "secondary" } = props

	return (
		<TouchableOpacity
			onPress={onToggle}
			style={[box, { backgroundColor: palette[isActive ? activeColor : idleColor] }]}
		>
			<Text tx={`#${tx}`} variant={TextVariant.SUBTITLE} />
		</TouchableOpacity>
	)
}

const box: ViewStyle = {
	paddingVertical: 5,
	paddingHorizontal: 10,
	borderRadius: 100
}
