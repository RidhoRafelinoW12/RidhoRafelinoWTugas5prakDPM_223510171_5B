import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const DetailsScreen = ({ route, navigation }) => {
  const { teamName, players } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.playerName}>{item}</Text>}
      />
      <Button title="Kembali" onPress={() => navigation.goBack()} buttonStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  teamName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playerName: {
    fontSize: 18,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007bff',
    marginTop: 20,
  },
});

export default DetailsScreen;
