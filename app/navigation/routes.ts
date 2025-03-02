import { ScreenNames } from "./screen-names";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import {
	LoginScreen, RegisterScreen, WelcomeOnBoardingScreen, UserProfile,
	ArticlesSearchResult, InterestsOnBoardingScreen,
	ArticleScreen
} from "@screens/index"
import { HomeTabsStack } from "./home-tab-navigator";

export interface ScreenNavigationProps {
	route: { params?: any }
	navigation: NativeStackNavigationProp<ParamListBase>
}
export interface Route {
	name: string;
	component: React.FC<{ route: any; navigation: any }>;
	options?: object;
	initialParams?: object;
}
const options = {
	headerShown: false
}

const WelcomeOnBoarding: Route[] = [
	{ name: ScreenNames.WELCOME_ON_BOARDING, component: WelcomeOnBoardingScreen, options }
]
const Auth: Route[] = [
	{ name: ScreenNames.LOGIN, component: LoginScreen, options },
	{ name: ScreenNames.REGISTER, component: RegisterScreen, options },
]
const Interests: Route[] = [
	{ name: ScreenNames.INTERESTS_ON_BOARDING, component: InterestsOnBoardingScreen, options },
]
const Home: Route[] = [
	{ name: ScreenNames.HOME, component: HomeTabsStack, options },
	{ name: ScreenNames.SEARCH_RESULT, component: ArticlesSearchResult, options }
]
const User: Route[] = [
	{
		name: ScreenNames.USER_PROFILE,
		component: UserProfile,
		options: {
			headerTitle: "Menu"
		}
	}
]
const Articles: Route[] = [
	{
		name: ScreenNames.ARTICLE, 
		component: ArticleScreen,
        options: ({ route }) => {
			return { title: route.params?.title }
		}
	}
]
//Auth must be include in both lists to avoid jump on load interests
export const authScreens = [...Auth, ...Home, ...Interests, ...User, ...Articles];
export const publicScreens = [...WelcomeOnBoarding, ...Auth];

