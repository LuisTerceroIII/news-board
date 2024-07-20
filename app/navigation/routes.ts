import { ScreenNames } from "./screen-names";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import { LoginScreen, RegisterScreen, WelcomeOnBoardingScreen, Home, ArticlesSearchResult, InterestsOnBoardingScreen } from "@screens/index"
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

const WelcomeOnBoarding: Route[] = [
	{ name: ScreenNames.WELCOME_ON_BOARDING, component: WelcomeOnBoardingScreen }
]
const Auth: Route[] = [
	{ name: ScreenNames.LOGIN, component: LoginScreen },
	{ name: ScreenNames.REGISTER, component: RegisterScreen },
]
const HomeScreens: Route[] = [
	{ name: ScreenNames.INTERESTS_ON_BOARDING, component: InterestsOnBoardingScreen },
	{ name: ScreenNames.HOME, component: Home },
	{ name: ScreenNames.SEARCH_RESULT, component: ArticlesSearchResult }
]

export const authScreens = [...Auth,...HomeScreens];
export const publicScreens = [...WelcomeOnBoarding, ...Auth];

