import { ArticleIcon } from "./icons/article-icon"
import { FilterIcon } from "./icons/filter-icon"
import { GoogleIcon } from "./icons/google-icon"

export const svgIcons = {
    google: GoogleIcon,
    article: ArticleIcon,
    filter: FilterIcon
}

export type IconSvgTypes = keyof typeof svgIcons