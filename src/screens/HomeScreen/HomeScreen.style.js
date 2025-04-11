import { StyleSheet } from 'react-native';
import { bgMain } from '../../Style/Components/BackgroundColors';
import { pLarge, pvHuge } from '../../Style/Components/Paddings';
import { mhMediumSmall, mhSmall } from '../../Style/Components/Margins';

import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...bgMain,
    paddingVertical: verticalScale(40),
    marginHorizontal: scale(16),
  },
  subContainer: {
    flex: 1,
  },

  optionContainer: {
    flex: 2,
    paddingTop: verticalScale(12),
    ...bgMain,
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
  },
  iconContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
    marginTop: verticalScale(20),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    gap: 5,
  },
});
