export enum LanguageCode {
	Arabic = "ar",
	Chinese = "zh",
	Dutch = "nl",
	English = "en",
	French = "fr",
	German = "de",
	Greek = "el",
	Hebrew = "he",
	Hindi = "hi",
	Italian = "it",
	Japanese = "ja",
	Malayalam = "ml",
	Marathi = "mr",
	Norwegian = "no",
	Portuguese = "pt",
	Romanian = "ro",
	Russian = "ru",
	Spanish = "es",
	Swedish = "sv",
	Tamil = "ta",
	Telugu = "te",
	Ukrainian = "uk"
}
enum CountryCode {
	Australia = "au",
	Brazil = "br",
	Canada = "ca",
	China = "cn",
	Egypt = "eg",
	France = "fr",
	Germany = "de",
	Greece = "gr",
	HongKong = "hk",
	India = "in",
	Ireland = "ie",
	Israel = "il",
	Italy = "it",
	Japan = "jp",
	Netherlands = "nl",
	Norway = "no",
	Pakistan = "pk",
	Peru = "pe",
	Philippines = "ph",
	Portugal = "pt",
	Romania = "ro",
	RussianFederation = "ru",
	Singapore = "sg",
	Spain = "es",
	Sweden = "se",
	Switzerland = "ch",
	Taiwan = "tw",
	Ukraine = "ua",
	UnitedKingdom = "gb",
	UnitedStates = "us"
}

export interface GNewsParamsFilter {
	lang?: LanguageCode
	country?: CountryCode
	max?: number
	keyword?: string
}