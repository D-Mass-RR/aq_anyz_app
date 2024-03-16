import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function CheckRoundedSvg() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={12} fill="#FB631D" />
      <Path
        d="M5.758 11.746l4.073 4.073 8.145-8.146"
        stroke="#fff"
        strokeWidth={1.92}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckRoundedSvg;
