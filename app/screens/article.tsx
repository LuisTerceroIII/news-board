import { Article } from '@app/model/entities/article'
import { useSelector } from 'react-redux'
import { WebView } from 'react-native-webview'
import { FC } from 'react'
import { ScreenNavigationProps } from '@app/navigation'
import { getActionArticle } from '@app/model/state/ui-slices/home/home-ui-slice'
import { Spinner } from '@app/components'

export const ArticleScreen: FC<ScreenNavigationProps> = ({route, navigation}) => {

	const actionArticle: Article = useSelector(getActionArticle)

	return (
		<WebView
			source={{uri: actionArticle?.url || ""}}
			style={{ flex: 1, justifyContent: "center", position: "relative" }}
			startInLoadingState={true}
			renderLoading={() => <Spinner style={{ position:"absolute", top: 200, alignSelf: "center"}}/>}
		/>
  	)
}
