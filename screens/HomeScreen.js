import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';

const teams = [
  { id: '1', name: 'FC Barcelona', logo: '🔵🔴' },
  { id: '2', name: 'Real Madrid', logo: '⚪️' },
  { id: '3', name: 'Atlético Madrid', logo: '🔴⚪️' },
  { id: '4', name: 'Sevilla FC', logo: '🔴⚪️' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Klasemen Sementara Liga Spanyol (LaLiga)</Text>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card containerStyle={styles.card}>
            <Card.Title>
              {item.logo} {item.name}
            </Card.Title>
            <Card.Divider />
            <Button
              title="Lihat Detail"
              onPress={() => navigation.navigate('Details', { teamName: item.name })}
              buttonStyle={styles.button}
            />
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
});

export default HomeScreen;
