import { LanguageCode } from "@app/model/entities/enums"

export interface TheNewsApiResponse {
    uuid: string
    title: string
    description: string
    keywords: string
    snippet: string
    url: string
    image_url: string
    language: string
    published_at: string
    source: string // url
    categories: string[]
    relevance_score: number
    locale: LanguageCode
}
