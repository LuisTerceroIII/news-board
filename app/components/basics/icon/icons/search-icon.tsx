import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { SvgIconProps } from "../svg-icon.props";

export const SearchIcon: React.FunctionComponent<SvgIconProps> = (props) => {

	const { width = 36, linesColor } = props

	return (
		<Svg
			width={width}
			height={width}
			viewBox="0 0 20 20"
			fill="none"
		>
			<Path
				fill={linesColor}
				fillRule="evenodd"
				d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
			/>
		</Svg>
	)
}
