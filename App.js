import React, { useState, useEffect } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { EasybaseProvider, useEasybase } from "easybase-react";
import { DataTable } from 'react-native-paper';
import ebconfig from "./ebconfig";
import { Connexion } from './connexion';


export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Home />
    </EasybaseProvider>
  );
}

function Home () {
  const { isUserSignedIn, signOut, db } = useEasybase();
  const [table, setTable] = useState([]);

  const tablePassword = async() => {
    const data = await db("MOT DE PASSE").return().limit(10).all();
    setTable(data);
  }

  useEffect(() => {
    tablePassword();
  }, []);


  const createPassword = async() => {
    try {
      const websiteInp = Alert.prompt("Le site web");
      const BackOfficeInp = Alert.prompt("Le back office");
      const LoginInp = Alert.prompt("Le login");
      const PasswordInp = Alert.prompt("Le mot de passe");
      if(!websiteInp || !BackOfficeInp ||!LoginInp || !PasswordInp) return;

      await db("MOT DE PASSE").insert({
        website: websiteInp,
        backoffice: BackOfficeInp,
        login: LoginInp,
        password: PasswordInp
      }).one();
      tablePassword();
    } catch (_) {
      alert("Erreur Insertion");
    }
  }

  return (
    isUserSignedIn() ?
    <View>
      <View style={styles.row}>
        <Button title="Déconnexion" onPress={signOut} />
      </View>
      <Text style={{ marginTop: 30 }}>Bienvenue</Text>
        <DataTable style={{ marginBottom: 45}}>
          <DataTable.Header>
            <DataTable.Title>Site Web</DataTable.Title>
            <DataTable.Title>Back Office</DataTable.Title>
            <DataTable.Title>Login</DataTable.Title>
            <DataTable.Title>Mot de passe</DataTable.Title>
          </DataTable.Header>
          {table.map(dn => 
            <DataTable.Row>
            <DataTable.Cell>{dn.website}</DataTable.Cell>
            <DataTable.Cell>{dn.backoffice}</DataTable.Cell>
            <DataTable.Cell>{dn.login}</DataTable.Cell>
            <DataTable.Cell>{dn.password}</DataTable.Cell>
          </DataTable.Row>  
          )}
        </DataTable>
      <Button title="Créer un mot de passe" onPress={createPassword} />
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