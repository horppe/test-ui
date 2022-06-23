import React from 'react';
import { TouchableOpacity, ActivityIndicator, View, StyleProp, TextStyle, ViewStyle, ActivityIndicatorProps } from 'react-native';
import Colors from '../shared/Theme/Colors';
import AppText from './AppText';
import Dimensions from '../shared/Theme/Dimensions';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface Props {
    text: string,
    onPress(): void,
    loading?: boolean
    textStyle?: StyleProp<TextStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    outerStyle?: StyleProp<ViewStyle>,
    disabled?: boolean,
    loaderProps?: ActivityIndicatorProps,
}
const ButtonOne = (props: Props) => {
    const { text, onPress, loading, textStyle, outerStyle, disabled = false, } = props;
    return (
        <TouchableOpacity
        disabled={disabled}
            style={[{

            }, outerStyle]}
            onPress={() => !loading && onPress()}
        >
            <View

                style={[{
                    width: "100%",
                    paddingVertical: Dimensions.buttonVPadding,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: Colors.Black,
                }, props.containerStyle]}
            >

                {
                    loading ? (
                        <ActivityIndicator
                            size={20}
                            color={Colors.White}
                            {...props.loaderProps}
                        />
                    ) : (
                            <AppText
                                style={[{
                                    fontSize: RFPercentage(2.2),
                                    color: Colors.White,
                                }, textStyle]}
                            >
                                {text}
                            </AppText>
                        )
                }




            </View>
        </TouchableOpacity>
    );
}

export default ButtonOne;
