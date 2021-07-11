import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { EasybaseProvider, useEasybase } from "easybase-react";
import { NativeAuth } from 'easybase-react/native'
import ebconfig from "./ebconfig"

const Deconnexion = () => {
  const { signOut } = useEasybase();

  return (<Button onPress={signOut} title="Deconnexion" />)
}

export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <NativeAuth dictionary={{
        signInHeader: "Connexion",
        emailLabel: "Adresse Électronique",
        passwordLabel: "Mot de passe",
        signInSubmitButton: "Entrer",
        forgotPasswordButton: "Mot de passe oublié ?",
        noAccountButton: "Pas de compte ? Inscription",
        errorPasswordsDoNotMatch: "Le mot de passe doit avoir 8 caractères minimum",
        newEmailLabel: "Adresse Électronique",
        newPasswordLabel: "Mot de passe",
        confirmNewPasswordLabel: "Confirmation du mot de passe",
        signUpHeader: "Création de compte",
        signUpSubmitButton: "Inscription",
        backToSignIn: "Revenir à la connexion",
        forgotPasswordHeader: "Nouveau mot de passe",
        forgotPasswordSecondaryHeader: "Entrez votre adresse électronique afin de vous envoyer un mail",
        errorPasswordsDoNotMatch: "Le mot de passe ne correspond pas de la 1ère saisie",
        forgotPasswordSubmitButton: "OK",
        forgotPasswordConfirmHeader: "Tapez le nouveau mot de passe",
        forgotPasswordConfirmSubmitButton: "OK",
        forgotPasswordConfirmLabel: "Nouveau mot de passe", 
        errorUserDoesNotExist: "L'utilisateur n'existe pas",
        errorWrongVerificationCode: "Code incorrect"
      }}>
        <Text style={{ marginTop: 35 }}>Vous êtes connectés !</Text>
        <Deconnexion />
      </NativeAuth>
    </EasybaseProvider>
  )
}


