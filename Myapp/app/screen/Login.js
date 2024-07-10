import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
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
      
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
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
      forgotPassword: {
        alignSelf: 'flex-end',
        marginRight: '10%',
      },
      forgotPasswordText: {
        color: '#8e8e93',
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
      signupContainer: {
        flexDirection: 'row',
        marginTop: 20,
        position:'absolute',
        bottom:30,

      },
      signupText: {
        color: '#fff',
      },
      signupLink: {
        color: '#ffcc00',
        marginLeft: 5,
      },
  });
  