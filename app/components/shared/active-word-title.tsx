import React, { FC, useMemo } from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'
import { palette } from '../../theme/palette'
import { fontFamily } from '../../theme/font'


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
		color: palette.active
	},
	word: {
		fontSize: 35,
		color: palette.white,
		fontFamily: fontFamily.jomolhari.regular
	}
})

export const ActiveWordTitle: FC<TitleProps> = (props) => {

	const { activeWord=0, txChain, textStyle } = props

	const words = txChain?.map((tx, index) => {
		const active = activeWord === index
		return (
			<Text style={[styles.word, active && styles.active, textStyle]} key={tx}>
				{tx}
			</Text>
		)
	})

	return (
		<View style={styles.box}>
			{words}
		</View>
	)
}
