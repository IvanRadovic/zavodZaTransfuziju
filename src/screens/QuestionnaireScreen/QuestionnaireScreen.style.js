import { StyleSheet } from 'react-native';
import {
  FlexDirectionRow,
  gapSmall,
} from '../../Style/Components/FlexAligments';

export const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
    color: '#880808',
    textAlign: 'center',
  },
  descriptionContainer: {
    backgroundColor: '#ffe6e6',
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#880808',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#880808',
    textAlign: 'center',
  },
  sendSurveyButton: {
    backgroundColor: '#880808',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },
});
