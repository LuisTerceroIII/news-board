import axios from 'axios'
import { Interest } from '@app/model/entities/interest'
import { LanguageCode } from '@app/model/entities/enums'
import { Article } from '@app/model/entities/article'
import { mapArticlesTheNewsAPI } from './data-mapping'
import { TheNewsApiResponse } from './the-news-api.data.type'

export class TheNewsAPI {

	constructor() { }

	url = process.env.THE_NEWS_API_URL

	//News from all world
	async getTopNews(page = 1, locale: LanguageCode, abortController: AbortController) {

		try {
			const apiKey = `api_token=${process.env.THE_NEWS_API_KEY}`
			const pageToReq = `page=${page}`
			const language = `locale=${locale}`
			const limit = `limit=3` // this limit cant be modify without modify api plan

			const config = {
				method: "get",
				url: `${this.url}top?${apiKey}&${language}&${limit}&${pageToReq}`,
				signal: abortController.signal,
				headers: {
					'Accept': 'application/json'
				}
			}
			const response = await axios(config)
			const mapToArticleType: Article[] = response?.data?.data?.map((article: TheNewsApiResponse) => mapArticlesTheNewsAPI(article))
			return mapToArticleType

		} catch (e) {
			if (abortController.signal.aborted) {
				console.log('Data fetching cancelled', e)
			} else {
				console.log("Error", e)

			}
		}
	}

	async getInterestNews(interest: Interest, page = 1, locale: LanguageCode, abortController: AbortController) {

		try {
			const keyword = `search=${interest.keyword}`
			const apiKey = `api_token=${process.env.THE_NEWS_API_KEY}`
			const pageToReq = `page=${page}`
			const language = `locale=${locale}`
			const limit = `limit=3` // this limit cant be modify without modify api plan

			const config = {
				method: "get",
				url: `${this.url}top?${keyword}&${apiKey}&${language}&${limit}&${pageToReq}`,
				signal: abortController.signal,
				headers: {
					'Accept': 'application/json'
				}
			}
			const response = await axios(config)
			const mapToArticleType: Article[] = response?.data?.map((article: TheNewsApiResponse) => mapArticlesTheNewsAPI(article))
			return mapToArticleType

		} catch (e) {
			if (abortController.signal.aborted) {
				console.log('Data fetching cancelled', e)
			} else {
				console.log("Error", e)
			}
		}
	}
}