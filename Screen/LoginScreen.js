import React, { useState } from 'react';


import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Hardcoded user credentials for demo purpose
  const registeredEmail = 'user@example.com'; // Replace with actual registration logic
  const registeredPassword = 'password123'; // Replace with actual registration logic

  const handleLogin = () => {
    // Validate email and password
    if (email === registeredEmail && password === registeredPassword) {
      // Successful login
      if (rememberMe) {
        // Store credentials (use AsyncStorage or any other storage method)
        Alert.alert('Success', 'Logged in successfully and credentials are remembered.');
      } else {
        Alert.alert('Success', 'Logged in successfully.');
      }
      navigation.navigate('HomeScreen'); // Replace with the next screen after login
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password screen (this is just an example)
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Remember Me Checkbox */}
      {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxText}>Remember Me</Text>
      </View> */}


      {/* Forgot Password Link */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>


      {/* Register Link */}
      <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxText: {
    fontSize: 16,
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  registerText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
