import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ProfileSvg() {
  return (
    <Svg width={31} height={31} viewBox="0 0 31 31" fill="none">
      <Path
        d="M23.542 26.804a10.765 10.765 0 00-8.042-3.596 10.766 10.766 0 00-8.043 3.596m8.043 2.571c-7.663 0-13.875-6.212-13.875-13.875S7.837 1.625 15.5 1.625 29.375 7.837 29.375 15.5 23.163 29.375 15.5 29.375zm0-10.792a4.625 4.625 0 110-9.25 4.625 4.625 0 010 9.25z"
        stroke="#000"
        strokeWidth={3.08333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProfileSvg;
