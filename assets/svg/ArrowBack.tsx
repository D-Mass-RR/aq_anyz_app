import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowBack() {
  return (
    <Svg width={9} height={16} viewBox="0 0 9 16" fill="none">
      <Path
        d="M8 15L1 8l7-7"
        stroke="#FB631D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowBack;
