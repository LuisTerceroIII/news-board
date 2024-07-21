import { ScreenNames } from "./screen-names";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import { LoginScreen, RegisterScreen, WelcomeOnBoardingScreen, HomeScreen, ArticlesSearchResult, InterestsOnBoardingScreen, LoadingScreen } from "@screens/index"
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

const WelcomeOnBoarding: Route[] = [
	{ name: ScreenNames.WELCOME_ON_BOARDING, component: WelcomeOnBoardingScreen }
]
const Auth: Route[] = [
	{ name: ScreenNames.LOGIN, component: LoginScreen },
	{ name: ScreenNames.REGISTER, component: RegisterScreen },
]
const Interests: Route[] = [
	{ name: ScreenNames.INTERESTS_ON_BOARDING, component: InterestsOnBoardingScreen },
]
const Home: Route[] = [
	{ name: ScreenNames.HOME, component: HomeTabsStack },
	{ name: ScreenNames.SEARCH_RESULT, component: ArticlesSearchResult }
]
//Auth must be include in both lists to avoid jump on load interests
export const authScreens = [...Auth,...Home, ...Interests];
export const publicScreens = [...WelcomeOnBoarding, ...Auth];

