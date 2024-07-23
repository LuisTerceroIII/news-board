import { CountryCode, LanguageCode } from "@app/model/entities/enums"

export interface GNewsParamsFilter {
	lang?: LanguageCode
	country?: CountryCode
	max?: number
	keyword?: string
}