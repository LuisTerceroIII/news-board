import { SavedArticles } from "./saved-articles"
import { SavedFilters } from "./saved-filters"

//this class has all the interactions that use can have
export class InteractionsRepository {

    savedArticles: SavedArticles
    savedFilters: SavedFilters


    constructor() {
        this.savedArticles = new SavedArticles()
        this.savedFilters = new SavedFilters()
    }

    get getSavedArticles() {
        return this.savedArticles.getArticles
    }

    get getSavedFilters() {
        return this.savedFilters.getFilters
    }


}