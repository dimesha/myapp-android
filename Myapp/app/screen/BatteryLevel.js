import React from 'react';
import { useBatteryLevel, useBatteryState, useLowPowerMode } from 'expo-battery';
import { StyleSheet, Text, View, Platform, ProgressBarAndroid, ProgressViewIOS } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BatteryLevel() {
  const batteryLevel = useBatteryLevel();
  const batteryState = useBatteryState();
  const lowPowerMode = useLowPowerMode();

  const getBatteryState = (state) => {
    switch (state) {
      case 1:
        return 'Unplugged';
      case 2:
        return 'Charging';
      case 3:
        return 'Full';
      default:
        return 'Unknown';
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="battery-full" size={80} color="green" style={styles.icon} />
      <Text style={styles.header}>Battery Status</Text>
      <Text style={styles.label}>Current Battery Level:</Text>
      {Platform.OS === 'android' ? (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={batteryLevel}
          style={styles.progressBar}
        />
      ) : (
        <ProgressViewIOS
          progress={batteryLevel}
          style={styles.progressBar}
        />
      )}
      <Text style={styles.value}>{(batteryLevel * 100).toFixed(0)}%</Text>
      <Text style={styles.label}>Current Battery State:</Text>
      <Text style={styles.value}>{getBatteryState(batteryState)}</Text>
      <Text style={styles.label}>Battery Saver Mode:</Text>
      <Text style={styles.value}>{lowPowerMode ? 'Enabled' : 'Disabled'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginTop: 15,
    color: '#666',
  },
  value: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBar: {
    marginTop: 10,
    height: 20,
    width: '100%',
  },
});
