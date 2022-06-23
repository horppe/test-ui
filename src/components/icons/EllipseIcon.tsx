import React from 'react';
import Svg, { Circle, CircleProps, Path, PathProps, SvgProps } from "react-native-svg";
interface IconProps extends SvgProps {
    circleProps?: CircleProps
}
export default (props: IconProps) => {

    return <Svg
        width="20" height="20" viewBox="0 0 20 20" fill="none"
        {...props}
    >
        <Circle
            cx="7" cy="7" r="5.5" stroke="#00B272" strokeWidth="3"
            {...props.circleProps}
        />
    </Svg>
};