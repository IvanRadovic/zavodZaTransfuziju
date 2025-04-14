import { StyleSheet } from 'react-native';
import { bgMain } from '../../Style/Components/BackgroundColors';
import { pLarge, pvHuge } from '../../Style/Components/Paddings';
import { mhMediumSmall, mhSmall } from '../../Style/Components/Margins';

import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import img from '../../../assets/background/pozadina.png';
import {
  FlexDirectionRow,
  gapMediumSmall,
  spaceAround,
} from '../../Style/Components/FlexAligments';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...bgMain,
  },
  subContainer: {
    flex: 1,
  },

  optionContainer: {
    flex: 2,
    ...bgMain,
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingHorizontal: 80,
    paddingBottom: 50,
  },
  iconContainer: {
    flex: 1,
    ...FlexDirectionRow,
    backgroundColor: '#FFDCDC',
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    padding: moderateScale(20),
    marginTop: verticalScale(20),
  },

  innerContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imageLogo: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: 'contain',
  },
});
