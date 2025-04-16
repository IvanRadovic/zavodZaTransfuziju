import { useEffect, useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * @name useInactivityTimer
 * @description Custom hook to handle inactivity timer for navigation. If the user is inactive for a specified time, it navigates to the HomeScreen.
 * @param timeoutMinutes {number} - The number of minutes before the user is considered inactive. Default is 2 minutes.
 * @returns {(function(): void)|*}
 * @example
 * const handleInteraction = useInactivityTimer(5);
 */
const useInactivityTimer = (timeoutMinutes = 0.3) => {
  const navigation = useNavigation();
  const timeoutRef = useRef(null);
  const lastInteractionRef = useRef(Date.now());

  const handleInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(
      () => {
        const currentTime = Date.now();
        if (
          currentTime - lastInteractionRef.current >=
          timeoutMinutes * 60 * 1000
        ) {
          navigation.navigate('HomeScreen');
        }
      },
      timeoutMinutes * 60 * 1000
    );
  }, [timeoutMinutes, navigation]);

  useEffect(() => {
    handleInteraction();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [handleInteraction]);

  return handleInteraction;
};

export default useInactivityTimer;
