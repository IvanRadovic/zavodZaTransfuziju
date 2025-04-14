import { Platform, StyleSheet } from 'react-native';
import { bgMain } from '../../Style/Components/BackgroundColors';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    ...bgMain,
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 50,
    paddingBottom: 40,
  },
  headerContainer: {
    backgroundColor: '#fff5f5',
    borderRadius: 15,
    padding: 25,
    marginVertical: 15,
    marginBottom: 25,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  titleIcon: {
    marginHorizontal: 12,
    opacity: 0.9,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2c3e50',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    lineHeight: 38,
    flexShrink: 1,
  },
  factsContainer: {
    borderTopWidth: 2,
    borderTopColor: '#ffe5e5',
    paddingTop: 20,
    marginTop: 15,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  factText: {
    fontSize: 16,
    color: '#4a5568',
    marginLeft: 15,
    flex: 1,
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  highlight: {
    color: '#c62828',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginRight: 10,
  },
  answerContainer: {
    padding: 20,
    paddingTop: 0,
    flexDirection: 'row',
    gap: 5,
  },
  answer: {
    fontSize: 18,
    lineHeight: 24,
    color: '#34495e',
  },

  registryIcon: {
    marginRight: 15,
    textShadowColor: 'rgba(198, 40, 40, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  infoCard: {
    marginTop: 30,
    padding: 25,
    backgroundColor: '#f8f9fa',
    borderLeftWidth: 4,
    borderLeftColor: '#c62828',
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#c62828',
    flex: 1,
  },
  infoIcon: {
    marginRight: 15,
  },
  factContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  bold: {
    fontWeight: '600',
    color: '#c62828',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  registryText: {
    fontSize: 17,
    lineHeight: 26,
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: 15,
  },
});
