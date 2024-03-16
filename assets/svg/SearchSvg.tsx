import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SearchSvg() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M13 13l6 6M8 15A7 7 0 118 1a7 7 0 010 14z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchSvg;
