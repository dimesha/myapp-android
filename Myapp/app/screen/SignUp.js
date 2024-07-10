import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
   
    return (
        <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#8e8e93"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#8e8e93"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8e8e93"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#8e8e93"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <View style={styles.passwordRequirements}>
        <Text style={styles.requirement}>✓ One lowercase character</Text>
        <Text style={styles.requirement}>✓ One uppercase character</Text>
        <Text style={styles.requirement}>✓ One number</Text>
        <Text style={styles.requirement}>✓ 8 characters minimum</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText} >Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signinLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
       
    )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1c1c1e',
    },
    title: {
      fontSize: 24,
      color: '#ffffff',
      marginBottom: 40,
    },
    input: {
      width: '80%',
      height: 50,
      backgroundColor: '#2c2c2e',
      borderRadius: 8,
      paddingHorizontal: 10,
      color: '#ffffff',
      marginBottom: 20,
    },
    passwordRequirements: {
      width: '80%',
      marginBottom: 20,
    },
    requirement: {
      color: '#8e8e93',
      marginBottom: 5,
    },
    button: {
      width: '80%',
      height: 50,
      backgroundColor: '#ffcc00',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 20,
    },
    buttonText: {
      color: '#000000',
      fontSize: 18,
    },
    signinContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    signinText: {
      color: '#8e8e93',
    },
    signinLink: {
      color: '#ffcc00',
      marginLeft: 5,
    },
  });

