//IndexScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePortfolioNavigation } from '../../components/hooks/usePortfolioNavigation';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    width: '100%',
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    color: '#8A2BE2',
    marginBottom: 18,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 0,
  },
  mainSpecialtiesTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 5,
  },
  specialtiesContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)', 
    elevation: 5, 
    alignItems: 'center',
    padding: 20,
  },
  columnsWrapper: {
    flexDirection: 'row',
    marginBottom: 8,
    textAlign: 'center',
    color: 'black',
  },
  specialtyItem: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
  },
  portfolioButton: {
    width: '80%',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#5E06A2',
    borderRadius: 30,
    alignItems: 'center',
  },
  portfolioButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  specialtyColumn: {
    flex: 1,
    alignItems: 'center',
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 10,
  },
});

export default function IndexScreen() {
 
  const navigateToPortfolio = usePortfolioNavigation();

 const handlePortfolioPress = () => {
  const id = 1; 
  navigateToPortfolio(id.toString()); 
};

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
<Image source={require('../../assets/images/vilyperfil.png')} style={styles.logo} resizeMode="cover" />
        <Text style={styles.title}>Vily Xavier</Text>
        <Text style={styles.subtitle}>STUDIO DE TATUAGEM E PIERCING</Text>

        <Text style={styles.mainSpecialtiesTitle}>ESPECIALIDADES</Text>
        <View style={styles.specialtiesContainer}>
          <View style={styles.columnsWrapper}>
            <View style={styles.specialtyColumn}>
              <Text style={styles.columnTitle}>Tatuagens</Text>
              <Text style={styles.specialtyItem}>• Cobertura de Cicatrizes</Text>
              <Text style={styles.specialtyItem}>• Tatuagens Coloridas</Text>
              <Text style={styles.specialtyItem}>• Tatuagens Rasteladas</Text>
              <Text style={styles.specialtyItem}>• Finelines</Text>
                <Text style={styles.specialtyItem}>• Blackworks</Text>
            </View>

            <View style={styles.specialtyColumn}>
              <Text style={styles.columnTitle}>Piercings</Text>
              <Text style={styles.specialtyItem}>• Perfurações Corporais</Text>
              <Text style={styles.specialtyItem}>• Perfurações Íntimas</Text>
              <Text style={styles.specialtyItem}>• Microdermal</Text>
              <Text style={styles.specialtyItem}>• Surface</Text>
              <Text style={styles.specialtyItem}>• Projetos Auriculares</Text>
            </View>
          </View>
         <TouchableOpacity
            style={styles.portfolioButton}
            onPress={handlePortfolioPress}
          >
            <Text style={styles.portfolioButtonText}>Ver Portfólio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}