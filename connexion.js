import { useEasybase } from 'easybase-react';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export function Connexion() {
    const [mailAdress, SetMailAdress] = useState("");
    const [password, SetPassword] = useState("");

    const { signIn } = useEasybase();

    const signInClick = async () => {
      const res = await signIn(mailAdress, password);
      if(mailAdress == "" || password == "") alert("Champ(s) invalide(s)");
      else if(!res.success) alert("Mot de passe ou adresse invalide");
      SetMailAdress("");
      SetPassword("");
    }

    return (
    <View style={styles.container}>
      <View style={styles.entree}>
        <TextInput 
          value={mailAdress} 
          style={styles.input} 
          onChangeText={e => SetMailAdress(e)} 
          placeholder="Adresse électronique"
        />
        <TextInput 
          value={password} 
          style={styles.input} 
          onChangeText={e => SetPassword(e)} 
          placeholder="Mot de passe"
          secureTextEntry
          />
        <Button title="Entrée" onPress={signInClick} />
      </View>
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
    paddingHorizontal: 34,
    width: 230
  }
});