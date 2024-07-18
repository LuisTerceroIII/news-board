import { ErrorsTx } from "@dictionary/es"

/* 
Extract error from format: 
Input: "Error: [auth/email-already-in-use] The email address is already in use by another account." 
output: "email_already_in_use" note i change - chars for _ to adapt to my error lib
*/
export const extractFirebaseErrorCode = (error: string): ErrorsTx => {
	const errorPattern = /\[auth\/(.+?)\]/
	const match = error.match(errorPattern)
	if (match && match[1]) {
		return match[1].replace(/-/g, '_') as ErrorsTx
	}
	return 'generic_error'
}