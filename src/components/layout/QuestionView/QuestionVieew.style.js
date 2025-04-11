import { StyleSheet } from 'react-native';
import {
  FlexDirectionRow,
  gapMediumSmall,
  justifyCenter,
} from '../../../Style/Components/FlexAligments';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  questionText: {
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 16,
    color: '#880808',
    textAlign: 'center',
  },

  answerContainer: {
    ...FlexDirectionRow,
    ...gapMediumSmall,
    ...justifyCenter,
  },

  answerItem: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
});
