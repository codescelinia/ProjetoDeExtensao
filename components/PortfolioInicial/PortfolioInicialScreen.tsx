import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { tatuagens } from '../Tatuagens/TatuagensScreen';
import { piercings } from '../Piercings/PiercingsScreen';
import { useFileExists } from '../hooks';


interface ImageItem {
  id: string;
  source: any;
}

type RootStackParamList = {
  PortfolioInicial: { id: string | number };
  Tatuagens: { id: string | number };
  Piercings: { id: string | number };
};

const PortfolioInicialScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  


  const renderItem = ({ item }: { item: ImageItem }) => (
    <Image source={item.source} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.portfolioTitle}>Portfólio</Text>

      <Text style={styles.sectionTitle}>Tatuagens</Text>
      <FlatList
        data={tatuagens.slice(0, 6)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.flatList}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Tatuagens')}>
        <Text style={styles.verMaisText}>Ver Mais Tatuagens</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Piercings</Text>
      <FlatList
        data={piercings.slice(0, 6)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.flatList}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Piercings')}>
        <Text style={styles.verMaisText}>Ver Mais Piercings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({


  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black', 
    alignItems: 'center', 
    
  },
  portfolioTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center', 
    color: '#8A2BE2', 
   paddingTop: 15,
  
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', 
  },
image: {
   width: '30%', 
    height: 100, 
    aspectRatio: 1, 
    marginHorizontal: 3,
    marginBottom: 3,
    paddingBottom: 5,
  },
  flatList: {
    marginBottom: 10,
  },
   
  columnWrapper: {
    justifyContent: 'space-around',
  },
  verMaisText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  paddingBottom: 25,
  },
});

export default PortfolioInicialScreen;