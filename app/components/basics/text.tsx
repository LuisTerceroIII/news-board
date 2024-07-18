import { FC } from "react";
import { StyleSheet, Text as RNText, TextStyle, StyleProp } from "react-native";
import { fontFamily, palette } from "@theme/index";

export enum TextVariant {
	LOGO_TITLE = "logoTitle", // this use Jomolhari font, rest of the app use nunito
	LOGO_SUBTITLE = "logoSubtitle", // this use Jomolhari font, rest of the app use nunito
	TITLE = "title",
	SUBTITLE = "subtitle",
	NOTE = "note", // small text use to display minor info
	ERROR = "error", // small text use to display minor info
	PARAGRAPH = "paragraph",
	LINK = "link"
}

interface TextProps {
	tx?: string;
	style?: StyleProp<TextStyle> | undefined
	numberOfLines?: number
	variant: TextVariant
}

export const Text: FC<TextProps> = (props) => {

	const { tx, numberOfLines = undefined, variant, style } = props

	return (
		<RNText
			style={[styles[variant], style]}
			numberOfLines={numberOfLines}>
			{tx}
		</RNText>
	)
};

const styles = StyleSheet.create({
	[TextVariant.LOGO_TITLE]: {
		fontSize: 40,
		color: palette.white,
		fontFamily: fontFamily.jomolhari,
		lineHeight: 50
	},
	[TextVariant.LOGO_SUBTITLE]: {
		fontSize: 30,
		color: palette.white,
		fontFamily: fontFamily.jomolhari,
		lineHeight: 50
	},
	[TextVariant.TITLE]: {
		fontSize: 24,
		color: palette.white,
		fontFamily: fontFamily.nunito.bold,
		fontWeight: 800
	},
	[TextVariant.SUBTITLE]: {
		fontSize: 18,
		color: palette.white,
		fontFamily: fontFamily.nunito.bold,
		fontWeight: 800
	},
	[TextVariant.NOTE]: {
		fontSize: 14,
		color: palette.white,
		fontFamily: fontFamily.nunito.regular,
		fontWeight: 400
	},
	[TextVariant.ERROR]: {
		fontSize: 14,
		color: palette.red,
		fontFamily: fontFamily.nunito.regular,
		fontWeight: 400
	},
	[TextVariant.PARAGRAPH]: {
		fontSize: 18,
		color: palette.white,
		fontFamily: fontFamily.nunito.regular,
		fontWeight: 400
	},
	[TextVariant.LINK]: {
		fontSize: 18,
		color: palette.active,
		fontFamily: fontFamily.nunito.bold,
		fontWeight: 800
	}
});
