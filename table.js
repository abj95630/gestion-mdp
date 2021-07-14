import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

{/* Composant pour le tableau */}
function Table({ user }) {
    {/*let table = [
        {
            user : { 
                website : "parisbasketball.paris",
                back_office : "parisbasketball.paris/back",
                identifiant : "sakina",
                mot_de_passe : "1233445"
            }
        }
    ];*/}

    return (
        <View style={styles.view}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>WS</DataTable.Title>
                    <DataTable.Title>BO</DataTable.Title>
                    <DataTable.Title>LG</DataTable.Title>
                    <DataTable.Title>MDP</DataTable.Title>
                </DataTable.Header>
                {/*table.map(dn => 
                <DataTable.Row>
                    <DataTable.Cell>{dn.website}</DataTable.Cell>
                    <DataTable.Cell>{dn}</DataTable.Cell>
                    <DataTable.Cell>{dn}</DataTable.Cell>
                    <DataTable.Cell>{dn}</DataTable.Cell>
                </DataTable.Row> 
                )*/}
            </DataTable>
        <Button title="Créer un mot de passe" onPress={() => Alert.alert("🚧 En construction ! 🚧")}/>
        </View>
    );
}

export default Table


const styles = StyleSheet.create({
    view : {
        backgroundColor : "yellow"
    }
})