import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { EasybaseProvider, useEasybase } from "easybase-react";
import ebconfig from "./ebconfig";
import { Connexion } from './connexion';


export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Accueil />
    </EasybaseProvider>
  );
}

function Accueil () {
  const { isUserSignedIn, signOut, db } = useEasybase();
  const [table, setTable] = useState([]);

  {/*useEffect(() => {
    db("MOT DE PASSE", true).return().limit(20).all()
    .then(data => setTable(data));
  }, [])*/}

  return (
    isUserSignedIn() ?
    <View>
      <Text style={{ marginTop: 30 }}>Bienvenue !</Text>
      <Button title="Déconnexion" onPress={signOut} />
      <Text>Voici un tableau !</Text>
      {table.map(ele => 
        <Text>{ele.pseudo}</Text>
      )}
    </View>
      :
    <Connexion />
  )
}


