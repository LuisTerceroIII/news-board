import React, { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { dictionary } from '@dictionary/dictionary'
import { palette, width } from '@theme/index'
import { ActiveWordTitle, Text, TextVariant  } from '@components/index'
interface SlideProps {
	titleTxChain: string[]
	messageTx?: string
	children?: ReactNode
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor: palette.bg_primary,
		justifyContent: "center",
		alignItems: "center",
	},
	message: {
		marginTop: 20,
		color: palette.tx_paragraph,
		width: width[9],
		textAlign: "center"
	}
})

export const WelcomeOnBoardingSlide: FC<SlideProps> = ({ titleTxChain, messageTx, children }) => {
	return (
		<View style={styles.box}>
			<ActiveWordTitle txChain={titleTxChain} />
			<ActiveWordTitle
				activeWord={2}
				txChain={[
					dictionary.welcomeOnBoarding?.subtitle_1 || "",
					dictionary.welcomeOnBoarding?.subtitle_2 || "",
					dictionary.welcomeOnBoarding?.subtitle_3 || ""
				]}
				textStyle={{marginTop: 10}}
			/>
			<Text
				tx={messageTx}
				variant={TextVariant.PARAGRAPH}
				style={styles.message} 
			/>
			{children}
		</View>
	)
}
