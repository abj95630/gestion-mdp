import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { EasybaseProvider } from "easybase-react";
import { NativeAuth } from 'easybase-react/native'
import ebconfig from "./ebconfig"

export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <NativeAuth>
        <Text>Vous êtes connectés !</Text>
      </NativeAuth>
    </EasybaseProvider>
  )
}


