import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgIconProps } from "../svg-icon.props";

export const AddIcon: React.FunctionComponent<SvgIconProps> = (props) => {

	const { width = 36, linesColor } = props

	return (
		<Svg
			width={width}
			height={width}
			viewBox="0 0 32 32"
			fill={linesColor}
		>
			<Path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M20,17h-3v3c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3h-3 c-0.6,0-1-0.4-1-1s0.4-1,1-1h3v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.6,0,1,0.4,1,1S20.6,17,20,17z" />
		</Svg>
	)
}
