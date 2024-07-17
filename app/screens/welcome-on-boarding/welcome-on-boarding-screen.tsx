import React, { FC } from 'react'
import { ScreenNavigationProps } from '../../navigation/routes'
import Swiper from 'react-native-swiper'
import { WelcomeOnBoardingSlide } from './slides/welcome-on-boarding-slide'
import { dictionary } from '../../dictionary/dictionary'
import { palette } from '../../theme/palette'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ScreenNames } from '../../navigation/screen-names'
import { Text, TextVariant } from '../../components/basics/text'
import { useAppDispatch } from '../../model/state/root-store'
import { resetAuthForm } from '../../model/state/auth/auth-slice'

const styles = StyleSheet.create({
	linksBox: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 60,
		paddingHorizontal: "10%"
	},
	linkTx: {
		color: palette.active,
		fontWeight: 800
	}
})

export const WelcomeOnBoardingScreen: FC<ScreenNavigationProps> = ({ navigation }) => {

	const dispatch = useAppDispatch()

	const goToLogin = () => {
		navigation?.navigate(ScreenNames.LOGIN)
		dispatch(resetAuthForm())

	}
	const goToRegister = () => {
		navigation?.navigate(ScreenNames.REGISTER)
		dispatch(resetAuthForm())
	}

	return (
		<Swiper
			loop={false}
			activeDotStyle={{
				width: 30
			}}
			activeDotColor={palette.active}
		>
			<WelcomeOnBoardingSlide
				titleTxChain={[
					dictionary.welcomeOnBoarding?.slide_one_title_1 || "",
					dictionary.welcomeOnBoarding?.slide_one_title_2 || ""
				]}
				messageTx={dictionary.welcomeOnBoarding?.slide_one_message}
			/>
			<WelcomeOnBoardingSlide
				titleTxChain={[
					dictionary.welcomeOnBoarding?.slide_two_title_1 || "",
					dictionary.welcomeOnBoarding?.slide_two_title_2 || "",
					dictionary.welcomeOnBoarding?.slide_two_title_3 || ""

				]}
				messageTx={dictionary.welcomeOnBoarding?.slide_two_message}
			/>
			<WelcomeOnBoardingSlide
				titleTxChain={[
					dictionary.welcomeOnBoarding?.slide_three_title_1 || "",
					dictionary.welcomeOnBoarding?.slide_three_title_2 || ""
				]}
				messageTx={dictionary.welcomeOnBoarding?.slide_three_message}
			/>
			<WelcomeOnBoardingSlide
				titleTxChain={[
					dictionary.welcomeOnBoarding?.slide_four_title_1 || "",
					dictionary.welcomeOnBoarding?.slide_four_title_2 || ""
				]}
				messageTx={dictionary.welcomeOnBoarding?.slide_four_message}
				children={
					<View style={styles.linksBox}>
						<TouchableOpacity onPress={goToRegister}>
							<Text
								tx={dictionary.welcomeOnBoarding?.slide_four_option_1}
								variant={TextVariant.LINK}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={goToLogin}>
							<Text
								tx={dictionary.welcomeOnBoarding?.slide_four_option_2}
								variant={TextVariant.LINK}
							/>
						</TouchableOpacity>
					</View>
				}
			/>
		</Swiper>
	)
}
