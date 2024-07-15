import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { Article } from '../../../model/entities/article'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'

interface ArticleCardProps {
	style?: ViewStyle
	article?: Article
	onPress?: () => void
}

const styles = StyleSheet.create({
	mainBox: {
		borderRadius: 19,
		backgroundColor: "white",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		padding: 16
	},
	image: {
		width: "100%",
		height: 150,
		resizeMode: "cover",
		borderRadius: 8
	},
	title: {
		paddingTop: 10,
	},
	description: {
		paddingTop: 5
	}
})

export const ArticleCard: FC<ArticleCardProps> = (props) => {

	const { style, onPress, article } = props

	return (
		<TouchableOpacity style={[styles.mainBox, style]} onPress={onPress}>
			<Image source={{ uri: article?.image }} style={styles.image} />
			<Heading variant='subTitle' tx={article?.title || ""} style={styles.title} />
			<Paragraph tx={article?.description || ""} numberOfLines={2} style={styles.description} />
		</TouchableOpacity>
	)
}
