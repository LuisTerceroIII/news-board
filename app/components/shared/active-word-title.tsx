import React, { FC } from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import { palette } from '@theme/palette'
import { Text, TextVariant } from '../basics/text'
interface TitleProps {
	activeWord?: number // based on zero count
	txChain?: string[] // ex: ["News" , "Board"]
	textStyle?: TextStyle
}

const styles = StyleSheet.create({
	box: {
		columnGap: 10,
		flexDirection: "row"
	},
	active: {
		color: palette.active,
	}
})

export const ActiveWordTitle: FC<TitleProps> = (props) => {

	const { activeWord=0, txChain, textStyle } = props

	const words = txChain?.map((tx, index) => {
		const active = activeWord === index
		return (
			<Text
				key={tx}
				tx={tx}
				variant={TextVariant.LOGO_TITLE} 
				style={[active && styles.active, textStyle]}
			/>
		)
	})

	return (
		<View style={styles.box}>
			{words}
		</View>
	)
}
