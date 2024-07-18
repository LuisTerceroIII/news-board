import { palette } from '@app/theme'
import React, { FC } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { Fold } from 'react-native-animated-spinkit'
import { Text, TextVariant } from '../basics/text'
import { dictionary } from '@app/dictionary/dictionary'
import { LoadingTx } from '@app/dictionary/es'


type LoadingOverlayProps = {
	visible: boolean,
	tx?: LoadingTx
}

export const LoadingOverlay: FC<LoadingOverlayProps> = (props) => {

	const { visible, tx = dictionary.loading?.general } = props

	return (
		<Modal visible={visible} transparent={true}>
			<View style={styles.overlay}>
				<Fold size={48} color={palette.active} />
				<Text variant={TextVariant.SUBTITLE} tx={tx} />
			</View>
		</Modal> 
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(100, 100, 99, 0.26)",
		justifyContent: "center",
		alignItems: "center",
		rowGap: 45
	}
})
