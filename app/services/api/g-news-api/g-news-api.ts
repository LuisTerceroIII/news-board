import axios from 'axios';
import { GNewsParamsFilter } from '../dtos.types';

export class GNewsAPI {

    constructor() {
    }

    async getFilterNews(filter: GNewsParamsFilter, abortController: AbortController) {

        try {
            const keyword = filter?.keyword != null ? `q=${filter.keyword}&` : ""
            const lang = filter?.lang != null ? `lang=${filter.lang}&` : "lang=en&"
            const country = filter?.country != null ? `country=${filter.country}&` : "country=us&"
            const max = filter?.max != null ? `max=${filter.max}&` : "max=10&"

            const config = {
                method: "get",
                url: `${process.env.EXPO_PUBLIC_G_NEWS_API_URL}${keyword}${lang}${country}${max}apikey=${process.env.EXPO_PUBLIC_G_NEWS_API_KEY}`,
                signal: abortController.signal,
                headers: {
                    'Accept': 'application/json'
                }
            }
            const response = await axios(config)
            return response

        } catch (e) {
            if (abortController.signal.aborted) {
                console.log('Data fetching cancelled', e);
            } else {
                console.log("Error", e)

            }

        }
    }
}