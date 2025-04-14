import { Text, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Header = ({ styles }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleWrapper}>
        <FontAwesome
          name="heartbeat"
          size={40}
          color="#c62828"
          style={styles.titleIcon}
        />
        <Text style={styles.title}>Vodič za davaoce krvi</Text>
        <FontAwesome
          name="heartbeat"
          size={40}
          color="#c62828"
          style={styles.titleIcon}
        />
      </View>

      <View style={styles.factsContainer}>
        <View style={styles.factItem}>
          <MaterialIcons name="favorite" size={24} color="#c62828" />
          <Text style={styles.factText}>
            Jedna donacija može spasiti do{' '}
            <Text style={styles.highlight}>3 života</Text>
          </Text>
        </View>

        <View style={styles.factItem}>
          <MaterialIcons name="access-time" size={24} color="#c62828" />
          <Text style={styles.factText}>
            Cijeli proces traje samo{' '}
            <Text style={styles.highlight}>45-60 minuta</Text>
          </Text>
        </View>

        <View style={styles.factItem}>
          <MaterialIcons name="people" size={24} color="#c62828" />
          <Text style={styles.factText}>
            Preko <Text style={styles.highlight}>100.000</Text> aktivnih
            davalaca u regionu
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
