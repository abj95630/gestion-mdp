import React, { useState, useEffect } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { EasybaseProvider, useEasybase } from "easybase-react";
import { DataTable } from 'react-native-paper';
import ebconfig from "./ebconfig";
import { Connexion } from './connexion';
import Table from './table'


export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Home />
    </EasybaseProvider>
  );
}

function Home () {
  const { isUserSignedIn, signOut, userID } = useEasybase();
  const user = userID();

  return (
    isUserSignedIn() ?
    <View>
      <View style={styles.row}>
        <Button title="Déconnexion" onPress={signOut} />
      </View>
      <Text style={{ marginTop: 30 }}>Bienvenue {user}</Text>
      <Table user={user}/>
    </View>
      :
    <Connexion />
  )
}

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    alignItems: "flex-end"
  }
});