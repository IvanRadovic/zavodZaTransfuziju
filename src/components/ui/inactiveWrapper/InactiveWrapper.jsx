import { TouchableWithoutFeedback, View } from 'react-native';

import useInactivityTimer from '../../../hooks/useInactivityTimer';

const InactivityWrapper = ({ children }) => {
  const handleInteraction = useInactivityTimer();

  return (
    <TouchableWithoutFeedback onPress={handleInteraction} accessible={false}>
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default InactivityWrapper;
