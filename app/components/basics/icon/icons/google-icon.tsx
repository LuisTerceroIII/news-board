import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgIconProps } from "../svg-icon.props";

export const GoogleIcon: React.FunctionComponent<SvgIconProps> = (props) => {

	const { width = 36 } = props

	return (
		<Svg
			width={width}
			height={width}
			viewBox="0 0 40 40"
			fill="none"
		>
			<Path
				fill="#FBBC05"
				fillRule="evenodd"
				d="M8.606 20c0-1.27.211-2.488.588-3.63l-6.591-5.033A19.547 19.547 0 0 0 .595 20c0 3.114.723 6.05 2.005 8.657l6.587-5.043A11.57 11.57 0 0 1 8.607 20Z"
				clipRule="evenodd"
			/>
			<Path
				fill="#EB4335"
				fillRule="evenodd"
				d="M20.178 8.444c2.76 0 5.252.978 7.21 2.578l5.697-5.689C29.614 2.311 25.163.444 20.178.444A19.525 19.525 0 0 0 2.603 11.337l6.59 5.033a11.54 11.54 0 0 1 10.985-7.926Z"
				clipRule="evenodd"
			/>
			<Path
				fill="#34A853"
				fillRule="evenodd"
				d="M20.178 31.556A11.54 11.54 0 0 1 9.194 23.63l-6.591 5.032a19.525 19.525 0 0 0 17.575 10.894c4.777 0 9.337-1.696 12.76-4.874l-6.257-4.837c-1.765 1.112-3.987 1.71-6.503 1.71Z"
				clipRule="evenodd"
			/>
			<Path
				fill="#4285F4"
				fillRule="evenodd"
				d="M38.871 20c0-1.155-.178-2.4-.445-3.555H20.178V24h10.504c-.525 2.576-1.955 4.556-4 5.845l6.256 4.837C36.532 31.345 38.87 26.374 38.87 20Z"
				clipRule="evenodd"
			/>
		</Svg>
	)
}
