import React from 'react';
import Svg, { Path, PathProps, SvgProps } from "react-native-svg";
interface IconProps extends SvgProps {
    pathProps?: PathProps
}
export default (props: IconProps) => {

    return <Svg
        width="38" height="41" viewBox="0 0 38 41" fill="none"
        {...props}
    >
        <Path d="M1.28198 19.4327V32.4789H16.8957L16.8965 32.4797L24.0581 27.0487V19.4327H1.28198Z" fill="#E3F2FF" />
        <Path d="M35.5402 26.5416C37.0012 29.1465 36.1485 32.4943 33.5951 34.0115L29.1689 36.6411L23.8545 27.1697C29.7623 23.6598 27.912 24.7592 28.2807 24.5401C30.8225 23.0301 34.0727 23.9261 35.5402 26.5416Z" fill="#FAFAFA" />
        <Path d="M23.8545 27.1698L29.1689 36.6412L24.3905 39.4801C21.8487 40.9902 18.5985 40.0942 17.131 37.4787C15.6538 34.8387 16.5534 31.5081 19.0761 30.0087L23.8545 27.1698Z" fill="#009CD1" />
        <Path d="M19.5029 11.6205L23.4507 17.0366C23.8448 17.578 24.0581 18.2358 24.0581 18.9115V19.4326H1.28198V18.9115C1.28198 18.2358 1.49533 17.578 1.88938 17.0366L5.83721 11.6205V8.49568H19.5029V11.6205Z" fill="#FAFAFA" />
        <Path d="M21.0212 3.33964V6.93323C21.0212 7.79643 20.3417 8.49565 19.5028 8.49565H5.83702C4.99813 8.49565 4.3186 7.79643 4.3186 6.93323V3.33964C4.3186 2.47644 4.99813 1.77722 5.83702 1.77722H19.5028C20.3417 1.77722 21.0212 2.47644 21.0212 3.33964Z" fill="#009CD1" />
        <Path d="M16.8964 32.4798L16.8957 32.479H1.28198V34.0414C1.28198 35.7671 2.64171 37.1663 4.31879 37.1663H16.9678L16.9686 37.1655L16.8964 32.4798Z" fill="#FAFAFA" />
        <Path d="M8.89296 12.4018C9.31206 12.4018 9.65213 12.0518 9.65213 11.6207C9.65213 11.1894 9.31199 10.8395 8.89296 10.8395C8.47386 10.8395 8.13379 11.1895 8.13379 11.6207C8.13371 12.0518 8.47386 12.4018 8.89296 12.4018Z" fill="#009CD1" />
        <Path d="M15.7257 25.4479H13.4481V23.1043C13.4481 22.6729 13.1081 22.3232 12.689 22.3232C12.2698 22.3232 11.9298 22.673 11.9298 23.1043V25.4479H9.65223C9.23298 25.4479 8.89307 25.7978 8.89307 26.2292C8.89307 26.6606 9.23305 27.0103 9.65223 27.0103H11.9298V29.3539C11.9298 29.7853 12.2698 30.1351 12.689 30.1351C13.1081 30.1351 13.4481 29.7853 13.4481 29.3539V27.0103H15.7257C16.145 27.0103 16.4849 26.6605 16.4849 26.2292C16.4849 25.7978 16.145 25.4479 15.7257 25.4479Z" fill="#009CD1" />
        <Path d="M27.9201 23.8637L24.8362 25.6957V18.9117C24.8362 18.073 24.5667 17.2407 24.077 16.5681L20.281 11.3602V9.14254C21.1646 8.82004 21.7994 7.95176 21.7994 6.93325V3.33973C21.7994 2.04747 20.7777 0.99614 19.5218 0.99614H5.85614C4.60028 0.99614 3.57849 2.04747 3.57849 3.33973V6.93333C3.57849 7.95169 4.21329 8.82012 5.0969 9.14262V11.3603L1.30061 16.5685C0.811203 17.2408 0.541748 18.073 0.541748 18.9117V34.0414C0.541748 36.1952 2.24465 37.9474 4.33773 37.9474H16.5389C18.2412 40.8836 21.9118 41.8661 24.7891 40.1567L33.9938 34.6882C36.8755 32.9758 37.9035 29.1586 36.2167 26.1511C34.5384 23.16 30.8275 22.1363 27.9201 23.8637ZM16.4492 31.6977H2.06008V20.2139H23.3178V26.5977L18.7154 29.3322C17.7558 29.9026 16.9801 30.7146 16.4492 31.6977ZM5.0969 3.33973C5.0969 2.90895 5.4375 2.55856 5.85607 2.55856H19.5217C19.9404 2.55856 20.281 2.90903 20.281 3.33973V6.93333C20.281 7.36411 19.9404 7.7145 19.5217 7.7145H5.85614C5.4375 7.7145 5.09698 7.36403 5.09698 6.93333C5.0969 6.93333 5.0969 3.33973 5.0969 3.33973ZM6.46346 12.0893C6.56201 11.9542 6.61531 11.7897 6.61531 11.6206V9.277H18.7626V10.8394H11.9298C11.5105 10.8394 11.1706 11.1893 11.1706 11.6206C11.1706 12.052 11.5106 12.4018 11.9298 12.4018H19.1422L22.862 17.505C23.1051 17.839 23.2561 18.2386 23.3017 18.6514H2.07625C2.12181 18.2386 2.27282 17.8391 2.5157 17.5054L6.46346 12.0893ZM2.06008 34.0414V33.2524H15.8536C15.6129 34.2653 15.6145 35.3471 15.8901 36.385H4.33773C3.08187 36.385 2.06008 35.3336 2.06008 34.0414ZM24.03 38.8036C21.8512 40.0982 19.067 39.3325 17.8081 37.089C16.5431 34.8239 17.3097 31.972 19.4748 30.6852L23.5957 28.2369L28.1509 36.3553L24.03 38.8036ZM33.2346 33.3351L29.4659 35.5741L24.9106 27.4556L28.6794 25.2168C30.8596 23.9216 33.6427 24.6886 34.9017 26.9321C36.1662 29.1871 35.3973 32.05 33.2346 33.3351Z" fill="#009CD1" />

    </Svg>
};