import { palette, paletteType } from '@app/theme'
import React, { FC } from 'react'
import { Fold } from 'react-native-animated-spinkit'

type SpinnerProps = {
    size?: number,
    color?: paletteType
}

export const Spinner: FC<SpinnerProps> = (props) => {

    const { size=48, color="active" } = props

    return <Fold size={size} color={palette[color]} />
}