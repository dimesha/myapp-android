import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Voice from '@react-native-voice/voice';

export default function VoiceToText() {
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    try {
      await Voice.start('en-NZ');
      setStarted(true);
    } catch (error) {
      console.error('Error starting Voice:', error);
    }
  };

  const stopSpeechToText = async () => {
    try {
      await Voice.stop();
      setStarted(false);
    } catch (error) {
      console.error('Error stopping Voice:', error);
    }
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.error('Speech Error:', error);
  };

  return (
    <View style={styles.container}>
      {!started ? (
        <Button title='Start Speech to Text' onPress={startSpeechToText} />
      ) : (
        <Button title='Stop Speech to Text' onPress={stopSpeechToText} />
      )}
      {results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
