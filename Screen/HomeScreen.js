import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [locationAccuracy, setLocationAccuracy] = useState('High Accuracy');

  const handleSearch = () => {
    // Implement search functionality (e.g., fetch coordinates for the entered location)
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Search location"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Example Marker */}
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Current Location"
          description="This is your current location."
        />
      </MapView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.accuracyText}>Location Accuracy: {locationAccuracy}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 1,
  },
  menuButton: {
    marginRight: 10,
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    marginTop: 60,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    zIndex: 1,
  },
  accuracyText: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
