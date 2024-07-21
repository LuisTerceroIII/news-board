import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgIconProps } from "../svg-icon.props";

export const FilterIcon: React.FunctionComponent<SvgIconProps> = (props) => {

	const { width = 36, linesColor } = props

	return (
		<Svg
			width={width}
			height={width}
			viewBox="0 0 32 32"
			fill={linesColor}
		>
			<Path d="M16,2C9.3,2,2,3.4,2,6.5V11c0,0.3,0.1,0.6,0.3,0.7L13,21.4V29c0,0.3,0.2,0.7,0.5,0.9C13.6,30,13.8,30,14,30 c0.2,0,0.3,0,0.4-0.1l4-2c0.3-0.2,0.6-0.5,0.6-0.9v-5.6l10.7-9.7c0.2-0.2,0.3-0.5,0.3-0.7V6.5C30,3.4,22.7,2,16,2z M16,4 c8,0,11.9,1.8,12,2.5C27.9,7.2,24,9,16,9C8,9,4.1,7.2,4,6.5C4.1,5.8,8,4,16,4z" />
		</Svg>
	)
}
