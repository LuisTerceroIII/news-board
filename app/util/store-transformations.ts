import { createTransform } from 'redux-persist'
import CryptoJS from "react-native-crypto-js"
import { SlicesNames } from '../model/state/slices-names'

const CryptoTransform = createTransform(
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

export default CryptoTransform