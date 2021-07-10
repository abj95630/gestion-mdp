import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.entree}>
        <TextInput style={styles.input} placeholder="Adresse électronique"/>
        <TextInput style={{ borderWidth: 1, paddingHorizontal: 34 }} placeholder="Mot de passe"/>
        <Button title="Entrée"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto"
  },
  entree: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 35,
    borderWidth: 1,
    paddingHorizontal: 34
  }
});
