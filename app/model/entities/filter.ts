import uuid from 'react-native-uuid';
import { CountryCode, LanguageCode } from './enums';

export class Filter {

	id: string
	keyword: string;
	description: string;
	languages: LanguageCode[];
	originCountries: CountryCode[];
	createdAt: Date;

	constructor(
		keyword: string = "",
		description: string = "",
		languages: LanguageCode[] = [],
		originCountries: CountryCode[] = [],
		createdAt: Date = new Date(),
	) {
		this.id = String(uuid.v4())
		this.keyword = keyword;
		this.description = description;
		this.languages = languages;
		this.originCountries = originCountries;
		this.createdAt = createdAt;
	}
}


