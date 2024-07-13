import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';


export default function Profile({ navigation }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const auth = FIREBASE_AUTH;
    const signOutUser = async () => {
      try {
          await auth.signOut();
          navigation.navigate('Login');
      } catch (e) {
          console.log(e);
      }
  }
    

    return (
        <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      
      <TextInput style={styles.input}>{auth.currentUser.email}</TextInput>
      
      <TextInput style={styles.input}>{auth.currentUser.uid}</TextInput>
       
    
      <TouchableOpacity style={styles.button} onPress={signOutUser}>
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
  