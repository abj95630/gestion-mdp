import React, { useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

function Table({ user }) {
    const [table, setTable] = useState({});
    let tableData = []

    return (
        <View>
            <DataTable style={{ marginBottom: 45}}>
            <DataTable.Header>
                <DataTable.Title>SW</DataTable.Title>
                <DataTable.Title>BO</DataTable.Title>
                <DataTable.Title>LG</DataTable.Title>
                <DataTable.Title>MDP</DataTable.Title>
            </DataTable.Header>
            {tableData.map(dn => 
                <DataTable.Row>
                <DataTable.Cell>{dn.user.website}</DataTable.Cell>
                <DataTable.Cell>{dn.backoffice}</DataTable.Cell>
                <DataTable.Cell>{dn.login}</DataTable.Cell>
                <DataTable.Cell>{dn.password}</DataTable.Cell>
                <DataTable.Cell>
                    <Pressable>X</Pressable>
                    <Pressable>M</Pressable>
                </DataTable.Cell>
            </DataTable.Row> 
            )}
            </DataTable>
            <Button title="Créer un mot de passe" onPress={createPassword} />
        </View>
    );
}

export default Table