import { StyleSheet } from 'react-native';

import { bgMain } from '../../Style/Components/BackgroundColors';
import { pvHuge } from '../../Style/Components/Paddings';
import { mhMediumSmall } from '../../Style/Components/Margins';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...bgMain,
    ...pvHuge,
    ...mhMediumSmall,
  },
});
