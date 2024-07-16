import ArticlesSearchResult from "../screens/articles-search-result";
import Home from "../screens/home";
import { ScreenNames } from "./screen-names";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import { WelcomeOnBoardingScreen } from "../screens/welcome-on-boarding/welcome-on-boarding-screen";

export interface ScreenNavigationProps {
	route: { params?: object }
	navigation: NativeStackNavigationProp<ParamListBase>
}
export interface Route {
	name: string;
	component: React.FC<{ route: any; navigation: any }>;
	options?: object;
	initialParams?: object;
}

const HomeScreens: Route[] = [
	{
		name: ScreenNames.HOME,
		component: Home
	},
	{ name: ScreenNames.SEARCH_RESULT, component: ArticlesSearchResult },
];

const WelcomeOnBoarding: Route[] = [
	{ 
		name: ScreenNames.WELCOME_ON_BOARDING, 
		component: WelcomeOnBoardingScreen,
		options: {
			headerShown: false
		}
	},
]

export const authScreens = [...HomeScreens];

export const publicScreens = [...WelcomeOnBoarding];

