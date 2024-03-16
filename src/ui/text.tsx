import React from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { StyleSheet, Text as NNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import type { TxKeyPath } from '@/core/i18n';
import { translate } from '@/core/i18n';

interface Props extends TextProps {
  className?: string;
  tx?: TxKeyPath;
}

export const Text = ({
  className = '',
  style,
  tx,
  children,
  ...props
}: Props) => {
  const textStyle = React.useMemo(
    () =>
      twMerge('text-base text-black  dark:text-white font-normal', className),
    [className]
  );

  const nStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        {
          fontFamily: 'Gilroy',
        },
        style,
      ]) as TextStyle,
    [style]
  );
  return (
    <NNText className={textStyle} style={nStyle} {...props}>
      {tx ? translate(tx) : children}
    </NNText>
  );
};
