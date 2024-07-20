import { CountryCode, LanguageCode } from './enums'
export interface Filter {
	id: string
	keywords?: string[]
	description?: string
	createdAt?: string // use timestamp
	lastDateRequests?: string // timestamp
    registerAt: string // timestamp
	sourcesURLS: string[]
}

//example:
/* const filter: Filter = {
	id: "1212",
	keywords: ["USA", "elecciones", "Joe Biden", "Trump"],
	description: "Filtro para hacer un tracking de noticias sobre las elecciones presidenciales 2024 en USA",
	createdAt: new Date().getTime().toString(),
	registerAt: new Date().getTime().toString(),
	lastDateRequests: new Date().getTime().toString(),
	sourcesURLS: [
		"www.bbc.com",
		"www.foxnews.com",
		"www.salon.com"
	] */
}
