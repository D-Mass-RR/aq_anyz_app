import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/ui';

type Props = {
  text: string;
  className?: string;
  textClassName?: string;
};
export const Title = ({
  text,
  className,
  textClassName = 'text-3xl tracking-tight',
}: Props) => {
  return (
    <View className={className + ' max-h-fit'}>
      <Text style={styles.text} className={textClassName}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'gropled',
    textAlign: 'center',
  },
});
