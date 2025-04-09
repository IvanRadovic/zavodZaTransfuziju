import { StyleSheet } from 'react-native';
import { bgMain } from '../../Style/Components/BackgroundColors';
import { pLarge, pvHuge } from '../../Style/Components/Paddings';
import { mhMediumSmall, mhSmall } from '../../Style/Components/Margins';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...bgMain,
    ...pvHuge,
    ...mhMediumSmall,
  },
  subContainer: {
    flex: 1,
  },

  optionContainer: {
    flex: 2,
    paddingTop: 12,
    ...bgMain,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ...pLarge,
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    gap: 5,
  },
});
