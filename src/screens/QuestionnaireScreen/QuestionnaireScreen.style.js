import { StyleSheet } from 'react-native';
import {
  FlexDirectionRow,
  gapSmall,
} from '../../Style/Components/FlexAligments';

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },

  parentQuestion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1E1E1E', // tamna siva, elegantna
    backgroundColor: '#fdfdfd', // svijetla pozadina da istakne naslov
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#880808', // tamnocrvena kao akcentna boja
    elevation: 1, // za Android shadow
    shadowColor: '#000', // za iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginHorizontal: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  instructionBox: {
    borderLeftWidth: 4,
    borderLeftColor: '#cc0000',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 18,
    marginBottom: 15,
  },
  instructionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cc0000',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    marginLeft: -22,
    marginRight: -10,
  },
  instructionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  instructionText: {
    fontSize: 14,
    lineHeight: 15,
    color: '#444',
    textAlign: 'justify',
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
    padding: 12,
    borderRadius: 6,
    marginTop: 15,
  },
  warningText: {
    color: '#cc0000',
    fontSize: 13,
    marginLeft: 8,
    fontWeight: '500',
  },

  sectionContainer: {
    marginVertical: 25,
  },
  femaleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff3f8',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ffe6f0',
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ff3366',
    marginHorizontal: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  femaleNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ff3366',
  },
  femaleNoteText: {
    color: '#666',
    fontSize: 14,
    marginLeft: 10,
    flexShrink: 1,
    lineHeight: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
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
