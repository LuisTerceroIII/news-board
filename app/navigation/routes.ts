import ArticlesSearchResult from "../screens/articles-search-result";
import Home from "../screens/home";
import { ScreenNames } from "./screen-names";

export interface Route {
	name: string;
	component: React.FC<{ route: any; navigation: any }>;
	options?: object;
	initialParams?: object;
}

const HomeScreens: Route[] = [
	{
		name: ScreenNames.HOME,
		component: Home,
		initialParams: { name: "Luis", ocupation: "dev" },
	},
	{ name: ScreenNames.SEARCH_RESULT, component: ArticlesSearchResult },
];

export const screens = [...HomeScreens];
