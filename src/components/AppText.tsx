import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../shared/Theme/Colors';

export const RegularFontFamily = "Poppins-Medium";
export const BoldFontFamily = "Poppins-Bold";
interface Props {
    children: any,
    style?: StyleProp<TextStyle>,
    props?: object
}
const AppText = ({children, style, props } : Props) => (
    <Text style={[defaultStyle.root, style,]} {...props}>
        {children}
    </Text>
);

export default AppText;


export const AppBoldText = ({children, style, props } : Props) => (
    <Text style={[defaultStyle.bold, style,]} {...props}>
        {children}
    </Text>
);

const style: StyleProp<TextStyle> = {
    color: Colors.TextPrimary,
    fontSize: RFPercentage(1.8),
    letterSpacing: .3,
}

export const defaultStyle = StyleSheet.create({
    root: {
        fontWeight: '400',
        fontFamily: RegularFontFamily,
        ...style,
    },
    bold: {
        fontWeight: '500',
        fontFamily: BoldFontFamily,
        ...style,
    },
});