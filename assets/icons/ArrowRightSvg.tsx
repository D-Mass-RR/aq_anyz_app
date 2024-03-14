import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowRight() {
  return (
    <Svg width={12} height={10} viewBox="0 0 12 10" fill="none">
      <Path
        d="M1 1l4 4-4 4m6-8l4 4-4 4"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowRight;
