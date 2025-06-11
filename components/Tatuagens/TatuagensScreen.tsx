import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFileExists } from '../hooks';

interface ImageItem {
  id: string;
  source: any;
}

export const tatuagens: ImageItem[] = [
  { id: '1', source: require('../../assets/Tatuagens/tatuagem1.jpg') },
  { id: '2', source: require('../../assets/Tatuagens/tatuagem2.jpg') },
  { id: '3', source: require('../../assets/Tatuagens/tatuagem3.jpg') },
  { id: '4', source: require('../../assets/Tatuagens/tatuagem4.jpg') },
  { id: '5', source: require('../../assets/Tatuagens/tatuagem5.jpg') },
  { id: '6', source: require('../../assets/Tatuagens/tatuagem6.jpg') },
  { id: '7', source: require('../../assets/Tatuagens/tatuagem7.jpg') },
  { id: '8', source: require('../../assets/Tatuagens/tatuagem8.jpg') },
  { id: '9', source: require('../../assets/Tatuagens/tatuagem9.jpg') },
  { id: '10', source: require('../../assets/Tatuagens/tatuagem10.jpg') },
  { id: '11', source: require('../../assets/Tatuagens/tatuagem11.jpg') },
  { id: '12', source: require('../../assets/Tatuagens/tatuagem12.jpg') },
  { id: '13', source: require('../../assets/Tatuagens/tatuagem13.jpg') },
  { id: '14', source: require('../../assets/Tatuagens/tatuagem14.jpg') },
  { id: '15', source: require('../../assets/Tatuagens/tatuagem15.jpg') },
  { id: '16', source: require('../../assets/Tatuagens/tatuagem16.jpg') },
  { id: '17', source: require('../../assets/Tatuagens/tatuagem17.jpg') },
  { id: '18', source: require('../../assets/Tatuagens/tatuagem18.jpg') },
  { id: '19', source: require('../../assets/Tatuagens/tatuagem19.jpg') },
  { id: '20', source: require('../../assets/Tatuagens/tatuagem20.jpg') },
  { id: '21', source: require('../../assets/Tatuagens/tatuagem21.jpg') },
  { id: '22', source: require('../../assets/Tatuagens/tatuagem22.jpg') },
  { id: '23', source: require('../../assets/Tatuagens/tatuagem23.jpg') },
  { id: '24', source: require('../../assets/Tatuagens/tatuagem24.jpg') },
  { id: '25', source: require('../../assets/Tatuagens/tatuagem25.jpg') },
  { id: '26', source: require('../../assets/Tatuagens/tatuagem26.jpg') },
  { id: '27', source: require('../../assets/Tatuagens/tatuagem27.jpg') },
  { id: '28', source: require('../../assets/Tatuagens/tatuagem28.jpg') },
  { id: '29', source: require('../../assets/Tatuagens/tatuagem29.jpg') },
  { id: '30', source: require('../../assets/Tatuagens/tatuagem30.jpg') },
  { id: '31', source: require('../../assets/Tatuagens/tatuagem31.jpg') },
  { id: '32', source: require('../../assets/Tatuagens/tatuagem32.jpg') },
  { id: '33', source: require('../../assets/Tatuagens/tatuagem33.jpg') },
  { id: '34', source: require('../../assets/Tatuagens/tatuagem34.jpg') },
  { id: '35', source: require('../../assets/Tatuagens/tatuagem35.jpg') },
  { id: '36', source: require('../../assets/Tatuagens/tatuagem36.jpg') },
  { id: '37', source: require('../../assets/Tatuagens/tatuagem37.jpg') },
  { id: '38', source: require('../../assets/Tatuagens/tatuagem38.jpg') },
  { id: '39', source: require('../../assets/Tatuagens/tatuagem39.jpg') },
  { id: '40', source: require('../../assets/Tatuagens/tatuagem40.jpg') },
  { id: '41', source: require('../../assets/Tatuagens/tatuagem41.jpg') },
  { id: '42', source: require('../../assets/Tatuagens/tatuagem42.jpg') },
  { id: '43', source: require('../../assets/Tatuagens/tatuagem43.jpg') },
  { id: '44', source: require('../../assets/Tatuagens/tatuagem44.jpg') },
  { id: '45', source: require('../../assets/Tatuagens/tatuagem45.jpg') },
  { id: '46', source: require('../../assets/Tatuagens/tatuagem46.jpg') }
]
const TatuagemItem = ({ item, onPress }: { item: ImageItem; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={item.source} style={styles.image} />
  </TouchableOpacity>
);

export const TatuagensScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const handleImagePress = (item: ImageItem) => {
    setSelectedImage(item);
  };


  
  const handleCloseModal = () => {
    setSelectedImage(null);
  };


  const screenWidth = Dimensions.get('window').width;

  
  const maxImageSize = screenWidth * 0.8;


  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Tatuagens</Text>
      <FlatList
        data={tatuagens}
        renderItem={({ item }) => (
          <TatuagemItem item={item} onPress={() => handleImagePress(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>

      <Modal visible={selectedImage !== null} transparent={true} onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <Image
            source={selectedImage?.source}
              style={[styles.fullImage, { width: maxImageSize, height: maxImageSize }]} 
            resizeMode="contain"
          />
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
     
  },
  sectionTitle: {
    fontSize: 30,
    marginBottom: 10,
    color: 'white',
     textAlign: 'center', 
     
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullImage: {
    aspectRatio: 1
   },
   closeButton: {
    marginTop: 20,
    backgroundColor: '#8A2BE2',
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 50, 
   
   
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
      padding: 15,
      
  },
});

export default TatuagensScreen;