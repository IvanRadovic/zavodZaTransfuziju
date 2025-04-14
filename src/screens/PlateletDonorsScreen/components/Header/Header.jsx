import { Text, View } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Header = ({ styles }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleWrapper}>
        <FontAwesome5
          name="hand-holding-water"
          size={40}
          color="#c62828"
          style={styles.titleIcon}
        />
        <Text style={styles.title}>Davaoci trombocita</Text>
        <FontAwesome5
          name="hand-holding-water"
          size={40}
          color="#c62828"
          style={styles.titleIcon}
        />
      </View>

      <View style={styles.factsContainer}>
        <View style={styles.factItem}>
          <MaterialIcons name="speed" size={24} color="#c62828" />
          <Text style={styles.factText}>
            Donaciju možete ponoviti za{' '}
            <Text style={styles.highlight}>samo 15 dana</Text>
          </Text>
        </View>

        <View style={styles.factItem}>
          <MaterialIcons name="biotech" size={24} color="#c62828" />
          <Text style={styles.factText}>
            <Text style={styles.highlight}>1 donacija</Text> = dovoljno za 3
            terapijske doze
          </Text>
        </View>

        <View style={styles.factItem}>
          <MaterialIcons name="watch-later" size={24} color="#c62828" />
          <Text style={styles.factText}>
            Procedura traje <Text style={styles.highlight}>45-90 minuta</Text>
          </Text>
        </View>

        <View style={styles.factItem}>
          <MaterialIcons name="science" size={24} color="#c62828" />
          <Text style={styles.factText}>
            Trombociti se obnavljaju{' '}
            <Text style={styles.highlight}>svakih 5 dana</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
