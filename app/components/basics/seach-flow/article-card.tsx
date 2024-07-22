import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Article } from '@model/entities/article'
import { Text, TextVariant } from '../text'
import { palette, width } from '@app/theme'
import FastImage from 'react-native-fast-image'
import { dictionary } from '@app/dictionary/dictionary'
import { formatDateToMMDDYY } from '@app/util/date'
interface ArticleCardProps {
	style?: ViewStyle
	article?: Article
	onPress?: () => void
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {

	const { style, onPress, article } = props

	return (
		<TouchableOpacity style={[styles.mainBox, style]} onPress={onPress}>
			<View>
				<FastImage
					source={{
						uri: article?.photoURL || article?.image,
						cache: 'immutable' // Only updates if url changes.
					}}
					resizeMode='cover'
					fallback//If load fail fallback to using Image (native compo)
					style={styles.image}
				/>
				<View style={styles.titleBox}>
					<Text
						tx={article?.title}
						variant={TextVariant.SUBTITLE}
						style={styles.title}
					/>
				</View>
			</View>
			<Text
				tx={`${dictionary.article?.by} ${article?.source?.name} - ${formatDateToMMDDYY(article?.publishedAt || "")}`}
				variant={TextVariant.NOTE}
				numberOfLines={3}
				style={{marginTop: 9}}
			/>
			<Text
				tx={article?.description}
				variant={TextVariant.PARAGRAPH}
				numberOfLines={3}
				style={{marginTop: 4}}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	mainBox: {
		position: "relative",
		width: width[9],
		alignSelf: "center"
	},
	image: {
		width: width[9],
		height: 200
	},
	titleBox: {
		backgroundColor: palette.tx_overlay,
		position: "absolute",
		bottom: 5,
		paddingHorizontal: 12,
		width: width[9] - 10,
		alignSelf: "center",
		paddingVertical: 5
	},
	title: {
		color: palette.secondary
	}
})