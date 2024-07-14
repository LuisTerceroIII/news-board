import { Article } from "../../entities/article"

export class SavedArticles {

    #articles: Article[]

    constructor() {
        this.#articles = []
    }

    get getArticles() {
        return this.#articles
    }

    saveArticle(article: Article) {
		this.#articles = [...this.#articles, article]
	}

	removeSavedArticle(articleId: string) {
		this.#articles = this.#articles?.filter(article => article?.id !== articleId)
	}

    articleIsSaved(articleId: string) {
        return this.#articles?.find(article => articleId === articleId) != null
    }
}