import { Article } from '@app/model/entities/article'
import { useSelector } from 'react-redux'
import { WebView } from 'react-native-webview'
import { FC, useEffect } from 'react'
import { ScreenNavigationProps } from '@app/navigation'
import { getActionArticle } from '@app/model/state/ui-slices/home/home-ui-slice'
import { LoadingOverlay, Spinner } from '@app/components'
import { dictionary } from '@app/dictionary/dictionary'

export const ArticleScreen: FC<ScreenNavigationProps> = ({route, navigation}) => {

	const actionArticle: Article = useSelector(getActionArticle)

	useEffect(() => {
		navigation.setParams({ title: `${actionArticle?.title?.slice(0, 22)}...` })
	},[])

	return (
		<WebView
			source={{uri: actionArticle?.url || ""}}
			style={{ flex: 1, justifyContent: "center", position: "relative" }}
			startInLoadingState={true}
			renderLoading={() => <LoadingOverlay visible tx={"loading_article"}/>}
		/>
  	)
}
