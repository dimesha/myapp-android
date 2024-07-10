import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#8e8e93"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#8e8e93"
        value={name}
        onChangeText={setName}
        
      />
    
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
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
        position:'absolute',
        top:80,
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
     
      button: {
        width: '80%',
        height: 50,
        backgroundColor: '#ffcc00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
        position: 'absolute',
        bottom:30,
      },
      buttonText: {
        color: '#000000',
        fontSize: 18,
      },
     
  });
  