import { createTransform } from 'redux-persist'
import CryptoJS from "react-native-crypto-js"
import { SlicesNames } from '@model/state/slices-names'
import { Interest } from '@app/model/entities/interest'
import { MixInterestsFeedTracker } from '@app/model/state/ui-slices/home/home-ui-slice'

export const CryptoTransform = createTransform(
	(inboundState, key) => {
		const encryptedState: string = CryptoJS.AES.encrypt(
			JSON.stringify(inboundState),
			process.env.ENCRYPT_STORE_KEY || ""
		).toString()
		return encryptedState
	},
	(outboundState, key) => {
		const decryptedState: string = JSON.parse(
			CryptoJS.AES.decrypt(
				outboundState, 
				process.env.ENCRYPT_STORE_KEY || ""
			)
			.toString(CryptoJS.enc.Utf8)
		)
		return decryptedState
	},
	{ whitelist: [SlicesNames.AUTH, SlicesNames.USER] }
)

export const initializeInterestsTrackers = (userInterests: Interest[], mainPage: number) => {
	const interestsToTrack: MixInterestsFeedTracker[] = userInterests?.map(interest => {
		return {
			interestId: interest.id,
			page: mainPage,
			keyword: interest.keyword,
			reachEnd: false
		}
	})
	return interestsToTrack
}