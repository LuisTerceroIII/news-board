import { 
    AddIcon, ArticleIcon, EyeCloseIcon, EyeOpenIcon, FilterIcon, GoBackIcon, GoogleIcon,
    HomeIcon, SearchIcon, UserAvatarIcon, WorldIcon
} from "./index"

export const svgIcons = {
    google: GoogleIcon,
    article: ArticleIcon,
    filter: FilterIcon,
    search: SearchIcon,
    eyeOpen: EyeOpenIcon,
    eyeClose: EyeCloseIcon,
    userAvatar: UserAvatarIcon,
    goBack: GoBackIcon,
    add: AddIcon,
    world: WorldIcon,
    home: HomeIcon
}

export type IconSvgTypes = keyof typeof svgIcons