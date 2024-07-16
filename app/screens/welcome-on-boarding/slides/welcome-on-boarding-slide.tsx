import React, { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { dictionary } from '../../../dictionary/dictionary'
import { palette } from '../../../theme/palette'
import { WelcomeOnBoardingTitle } from './welcome-on-boarding-title'
import { Paragraph } from '../../../components/basics/paragraph'

interface SlideProps {
	titleTxChain: string[]
	messageTx?: string
	children?: ReactNode
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor: palette.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	message: {
		marginTop: 20,
		color: palette.white,
		paddingHorizontal: 10,
		textAlign: "center"
	}

})

export const WelcomeOnBoardingSlide: FC<SlideProps> = ({ titleTxChain, messageTx, children }) => {
	return (
		<View style={styles.box}>
			<WelcomeOnBoardingTitle
				txChain={titleTxChain}
			/>
			<WelcomeOnBoardingTitle
				activeWord={2}
				txChain={[
					dictionary.welcomeOnBoarding?.subtitle_1 || "",
					dictionary.welcomeOnBoarding?.subtitle_2 || "",
					dictionary.welcomeOnBoarding?.subtitle_3 || ""
				]}
				textStyle={{marginTop: -10}}
			/>
			<Paragraph 
				tx={messageTx}
				style={styles.message}
			/>
			{children}
		</View>
	)
}