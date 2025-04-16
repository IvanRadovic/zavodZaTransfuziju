import { Platform, StyleSheet } from 'react-native';
import { bgMain } from '../../Style/Components/BackgroundColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...bgMain,
  },

  scrollViewContainer: {
    paddingTop: 20,
    paddingHorizontal: 50,
    paddingBottom: 40,
  },
  headerContainer: {
    backgroundColor: '#fff5f5',
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  titleIcon: {
    marginHorizontal: 10,
    opacity: 0.8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  factsContainer: {
    borderTopWidth: 2,
    borderTopColor: '#ffe5e5',
    paddingTop: 15,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  factText: {
    fontSize: 16,
    color: '#4a5568',
    marginLeft: 12,
    flex: 1,
    lineHeight: 24,
  },
  highlight: {
    color: '#c62828',
    fontWeight: '600',
  },
});
