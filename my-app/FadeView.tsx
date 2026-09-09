import React, { PropsWithChildren, useEffect, useRef } from 'react';
import {
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';

type FadeViewProps = PropsWithChildren<{
  duration?: number;
  style?: StyleProp<ViewStyle>;
}>;

export default function FadeView({
  children,
  duration = 500,
  style,
}: FadeViewProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    });

    animation.start();

    return () => animation.stop();
  }, [duration, opacity]);

  return <Animated.View style={[style, { opacity }]}>{children}</Animated.View>;
}