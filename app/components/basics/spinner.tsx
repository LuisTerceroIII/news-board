import { palette, paletteType } from '@app/theme'
import React, { FC } from 'react'
import { ViewStyle } from 'react-native'
import { Fold } from 'react-native-animated-spinkit'

type SpinnerProps = {
    size?: number,
    color?: paletteType
    style?: ViewStyle
}

export const Spinner: FC<SpinnerProps> = (props) => {

    const { size=48, color="active", style } = props

    return <Fold size={size} color={palette[color]} style={style} />
}