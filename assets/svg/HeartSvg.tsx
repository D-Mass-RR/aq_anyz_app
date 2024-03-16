import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HeartSvg({ fill }: { fill: string }) {
  return (
    <Svg width={17} height={15} viewBox="0 0 17 15" fill={fill}>
      <Path
        d="M8.359 3.534C6.742-.26 1.085.144 1.085 4.994c0 4.849 7.274 8.89 7.274 8.89s7.274-4.041 7.274-8.89c0-4.85-5.658-5.254-7.274-1.46z"
        stroke="#FB631D"
        strokeWidth={1.61644}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartSvg;
