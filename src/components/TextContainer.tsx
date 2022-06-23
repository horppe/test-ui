import React, {
    ReactNode
} from 'react';
import {
    StyleProp, ViewStyle, TouchableOpacity
} from 'react-native';
import Colors from '../shared/Theme/Colors';

interface Props {
    containerStyle?: StyleProp<ViewStyle>,
    icon?: any,
    leftIcon?: any,
    onPressIcon?: () => void,
    child?: ReactNode,
    onPress: () => void,
}

const TextContainer = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[{
                alignItems: 'center',
                height: 40,
                borderRadius: 2,
                backgroundColor: Colors.InputBg,
                paddingHorizontal: 5,
                justifyContent: 'center',
            }, props.containerStyle]
            }>
                {
                props.leftIcon && (
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: '30%'
                        }}
                        onPress={() => {
                            props.onPressIcon && props.onPressIcon();
                        }}>
                        {
                            props.leftIcon
                        }
                    </TouchableOpacity>
                )
            }
            {
                props.child && props.child
            }

            {
                props.icon && (
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: '30%'
                        }}
                        onPress={() => {
                            props.onPressIcon && props.onPressIcon();
                        }}>
                        {
                            props.icon
                        }
                    </TouchableOpacity>
                )
            }
        </TouchableOpacity>
    )
}


export default TextContainer;