import { Article } from "@app/model/entities/article"
import { LanguageCode } from "@app/model/entities/enums"
import { getDomainName } from "@util/format"
import { TheNewsApiResponse } from "./the-news-api.data.type"

export const mapArticlesTheNewsAPI = (article: TheNewsApiResponse): Article => {
	let description = ""
	if (article.description === "") description = article.snippet
	else description = article.description
	return {
		id: article.uuid,
		title: article.title,
		description: description,
		url: article.url,
		local: article.language as LanguageCode,
		photoURL: article.image_url,
		publishedAt: article.published_at,
		source: {
			id: article.source,
			name: getDomainName(article.source),
			url: article.source
		}
	}
}