// LoadingScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Text, Image } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const logoPosition = useRef(new Animated.Value(-200)).current; // Initial position off-screen (left)

  useEffect(() => {
    // Animate the logo to move from left to center, then to the right
    Animated.sequence([
      Animated.timing(logoPosition, {
        toValue: 0, // Move to center
        duration: 3500, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
      Animated.timing(logoPosition, {
        toValue: 480, // Move to right
        duration: 3500, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to the next screen after animation finishes
      navigation.replace('Login');
    });
  }, [logoPosition, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { transform: [{ translateX: logoPosition }] }]}>
      <Image
    source={require('../assets/Logoofaa.png')} // Replace with your logo's path
    style={{ width: 200, height: 200,resizeMode: 'contain' }}
  />
        <Text style={styles.logoText}>Aapadhseva</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Light blue background
  },
  logoContainer: {
    width: 450,
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default LoadingScreen;
