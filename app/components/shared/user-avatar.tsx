import { getUserPhotoURL } from '@app/model/state/user/user-views'
import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { SvgIcon } from '../basics/icon/svg-icon'
import { palette } from '@app/theme'
interface UserAvatarProps {
	onPress?: () => void,
	size?: number
	iconColor?: string
}

export const UserAvatar: FC<UserAvatarProps> = (props) => {

	const { onPress, size = 45, iconColor=palette.secondary } = props
	const photoURL = useSelector(getUserPhotoURL)

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{ width: size, height: size, borderRadius: (size / 2) },
				styles.box
			]}
		>
			{photoURL ?
				<Image
					source={{ uri: photoURL }}
					style={[
						{ width: size, height: size, borderRadius: (size / 2) },
						styles.image
					]}
				/> :
				<SvgIcon
					icon="userAvatar"
					width={size}
					linesColor={iconColor}
				/>
			}

		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	box: {
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		resizeMode: "cover"
	}
})
