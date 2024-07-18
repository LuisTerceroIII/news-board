import React from "react"
import { TouchableOpacity, ViewStyle } from "react-native"
import { SvgIconProps } from "./svg-icon.props"
import { IconSvgTypes, svgIcons } from "./icons-svg.types"
import { palette } from "@theme/index"

interface MainSvgIconProps extends SvgIconProps {
	icon: IconSvgTypes
	width?: number
	onPress?: () => void
	disabled?: boolean
	containerStyle?: ViewStyle | ViewStyle[]
}

const CONTAINER: ViewStyle = {
	alignItems: "center",
	justifyContent: "center",
}

const addPropsToIcon = (IconSvgComponent: any, additionalProps: any) => {
	return function WithPropsWrapper(props: React.JSX.IntrinsicAttributes) {
		return <IconSvgComponent {...props} {...additionalProps} />
	}
}

export const SvgIcon: React.FunctionComponent<MainSvgIconProps> = (props) => {

	const { width = 20, linesColor = palette.active, opacity = 1,
		onPress = null, disabled = (onPress === null), icon, containerStyle
	} = props

	const w = Math.round(width)

	const IconChildWithProps = addPropsToIcon(svgIcons[icon], { width: w, linesColor, opacity })

	return svgIcons[icon] != null && (
		<TouchableOpacity disabled={disabled} onPress={onPress || undefined} style={[CONTAINER, containerStyle]}>
			<IconChildWithProps />
		</TouchableOpacity>
	)
}
