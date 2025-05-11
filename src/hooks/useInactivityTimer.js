// hooks/useInactivityTimer.js
import { useEffect, useRef, useCallback } from 'react';
import { PanResponder } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const useInactivityTimer = (navigation) => {
  const timerRef = useRef();

  // Resetuj timer na 3 minuta
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 180000); // 3 minuta
  }, [navigation]);

  // Dodatni handler za aktivnost
  const handleActivity = useCallback(() => {
    resetTimer();
  }, [resetTimer]);

  useFocusEffect(
    useCallback(() => {
      // Resetuj timer kad se screen fokusira
      handleActivity();

      // Čisti timer pri unmount-u
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [handleActivity])
  );

  // Podesi PanResponder da hvata sve touch evente
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        handleActivity();
        return false; // Dozvoli child komponentama da prime event
      },
    })
  ).current;

  return {
    panHandlers: panResponder.panHandlers,
    handleActivity,
  };
};
