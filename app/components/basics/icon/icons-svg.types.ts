import { ArticleIcon } from "./icons/article-icon"
import { EyeCloseIcon } from "./icons/eye-close-icon"
import { EyeOpenIcon } from "./icons/eye-open-icon"
import { FilterIcon } from "./icons/filter-icon"
import { GoogleIcon } from "./icons/google-icon"
import { SearchIcon } from "./icons/search-icon"

export const svgIcons = {
    google: GoogleIcon,
    article: ArticleIcon,
    filter: FilterIcon,
    search: SearchIcon,
    eyeOpen: EyeOpenIcon,
    eyeClose: EyeCloseIcon
}

export type IconSvgTypes = keyof typeof svgIcons