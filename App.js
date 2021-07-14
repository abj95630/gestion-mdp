import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { EasybaseProvider, useEasybase } from "easybase-react";
import ebconfig from "./ebconfig";
import { Connexion } from './connexion';
import Table from './table'

{/* Utilisation de la plateforme EasyBase pour la gestion utilisateurs */}
export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Home />
    </EasybaseProvider>
  );
}

{/* L'écran d'accueil avec une condition ternaire si l'utilisateur est bien connecté sinon c'est écran
de connexion qui s'affichera*/}
function Home () {
  const { isUserSignedIn, signOut, userID } = useEasybase();
  const user = userID();

  return (
    isUserSignedIn() ?
    <View style={styles.view}>
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
  view : {
    backgroundColor: "red"
  },
  row: {
    marginTop: 20,
    alignItems: "flex-end",
  }
});