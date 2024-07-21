import React, { FC } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { Spinner, Text, TextVariant } from "@components/index"
import { dictionary } from '@app/dictionary/dictionary'
import { LoadingTx } from '@app/dictionary/es'
import { palette } from '@app/theme'

type LoadingOverlayProps = {
	visible: boolean,
	tx?: LoadingTx
}

export const LoadingOverlay: FC<LoadingOverlayProps> = (props) => {

	const { visible, tx = dictionary.loading?.general } = props

	return (
		<Modal visible={visible} transparent={true}>
			<View style={styles.overlay}>
				<Spinner />
				<Text variant={TextVariant.SUBTITLE} tx={tx} />
			</View>
		</Modal> 
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: palette.bg_overlay,
		justifyContent: "center",
		alignItems: "center",
		rowGap: 45
	}
})
