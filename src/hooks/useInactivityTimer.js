// hooks/useInactivityTimer.js
import { useEffect, useRef, useCallback } from 'react';
import { PanResponder } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const useInactivityTimer = (navigation) => {
  const timerRef = useRef();

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 60000); // 1 minute
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      resetTimer();
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [resetTimer])
  );

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        resetTimer();
        return false;
      },
    })
  ).current;

  return { panHandlers: panResponder.panHandlers, resetTimer };
};
