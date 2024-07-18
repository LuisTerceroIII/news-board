import React, { useMemo } from "react"
import { ScrollView, View } from "react-native"
import { IconSvgTypes, svgIcons } from "./icons-svg.types"
import { SvgIcon } from "./svg-icon"
import { Text, TextVariant } from "../text"
import { palette } from "../@theme/palette"

export const SvgViewer: React.FunctionComponent = (props) => {

    const icons = useMemo(() => {
            const svgIcon = []
            for (const key in svgIcons) {
                svgIcon.push(
                    <View style={{flexDirection: "row", columnGap: 12}}>
                        <SvgIcon icon={key as IconSvgTypes}  linesColor={palette.active} width={40}/>
                        <Text variant={TextVariant.SUBTITLE} tx={key}/>
                    </View>
                )
            }
            return svgIcon
    }, [])
    
    return (
        <ScrollView contentContainerStyle={{rowGap: 12}}>
            {icons}
        </ScrollView>
    )
}
