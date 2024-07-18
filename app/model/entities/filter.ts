import { CountryCode, LanguageCode } from './enums'
export interface Filter {
	id: string
	keyword?: string
	description?: string
	languages?: LanguageCode[]
	originCountries?: CountryCode[]
	createdAt?: string // use timestamp
}
