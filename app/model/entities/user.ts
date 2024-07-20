import { Article } from "./article"
import { Filter } from "./filter"
import { Interest } from "./interest"

export interface User {
    id: string
    fullName: string
    email: string
    registerAt: string // timestamp format
    photoURL?: string
    savedFilters?: Filter[]
    savedArticles?: Article[]
    interests?: Interest[]
}