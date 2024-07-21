import { ArticleIcon } from "./icons/article-icon"
import { FilterIcon } from "./icons/filter-icon"
import { GoogleIcon } from "./icons/google-icon"
import { SearchIcon } from "./icons/search-icon"

export const svgIcons = {
    google: GoogleIcon,
    article: ArticleIcon,
    filter: FilterIcon,
    search: SearchIcon
}

export type IconSvgTypes = keyof typeof svgIcons