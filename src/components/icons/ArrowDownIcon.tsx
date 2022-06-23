import React from 'react';
import Svg, { Path, PathProps, SvgProps } from "react-native-svg";
interface IconProps extends SvgProps {
    pathProps?: PathProps
}
export default (props: IconProps) => {

    return <Svg
    width="13" height="8" viewBox="0 0 13 8" fill="none"
        {...props}
    >
        <Path
            opacity="0.5" d="M1.26791 0.0299558L0.165762 1.07867L5.99771 7.23624L12.1613 1.40447L11.1187 0.302483L6.05704 5.09161L1.26791 0.0299558Z" 
            fill="#043F7C"
            {...props.pathProps}
        >

        </Path>
    </Svg>
};