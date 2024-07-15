import React, { FC } from 'react'
import { ScreenNavigationProps } from '../../navigation/routes'
import Swiper from 'react-native-swiper'
import { SlideOne } from './slides/slideOne'
import { SlideTwo } from './slides/slideTwo'
import { SlideThree } from './slides/slideThree'

export const WelcomeOnBoardingScreen: FC<ScreenNavigationProps> = (props) => {

	return (
		<Swiper>
			<SlideOne />
			<SlideTwo />
			<SlideThree />
		</Swiper>
	)
}
