import React from 'react'
import { View } from 'react-native'
import { Heading } from '../../../components/basics/heading'
import { dictionary } from '../../../dictionary/dictionary'

export const SlideTwo = () => {
	return (
		<View>
			<Heading tx={dictionary.welcomeOnBoarding?.slide_one_message} variant='title'/>
		</View>
	)
}
