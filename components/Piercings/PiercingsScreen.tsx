import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ImageItem {
  id: string;
  source: any;
}

export const piercings: ImageItem[] = [
  { id: '1', source: require('../../assets/Piercings/piercing1.jpg') },
  { id: '2', source: require('../../assets/Piercings/piercing2.jpg') },
  { id: '3', source: require('../../assets/Piercings/piercing3.jpg') },
  { id: '4', source: require('../../assets/Piercings/piercing4.jpg') },
  { id: '5', source: require('../../assets/Piercings/piercing5.jpg') },
  { id: '6', source: require('../../assets/Piercings/piercing6.jpg') },
  { id: '7', source: require('../../assets/Piercings/piercing7.jpg') },

  { id: '10', source: require('../../assets/Piercings/piercing10.jpg') },
  { id: '11', source: require('../../assets/Piercings/piercing11.jpg') },
  { id: '12', source: require('../../assets/Piercings/piercing12.jpg') },
  { id: '13', source: require('../../assets/Piercings/piercing13.jpg') },
  { id: '14', source: require('../../assets/Piercings/piercing14.jpg') },
  { id: '15', source: require('../../assets/Piercings/piercing15.jpg') },
  { id: '16', source: require('../../assets/Piercings/piercing16.jpg') },
  { id: '17', source: require('../../assets/Piercings/piercing17.jpg') },
  { id: '18', source: require('../../assets/Piercings/piercing18.jpg') },
  { id: '19', source: require('../../assets/Piercings/piercing19.jpg') },
  { id: '20', source: require('../../assets/Piercings/piercing20.jpg') },
  { id: '21', source: require('../../assets/Piercings/piercing21.jpg') },
  { id: '22', source: require('../../assets/Piercings/piercing22.jpg') },
  { id: '23', source: require('../../assets/Piercings/piercing23.jpg') },
  { id: '24', source: require('../../assets/Piercings/piercing24.jpg') },
  { id: '25', source: require('../../assets/Piercings/piercing25.jpg') },
  { id: '26', source: require('../../assets/Piercings/piercing26.jpg') }
]


const PiercingItem = ({ item, onPress }: { item: ImageItem; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={item.source} style={styles.image} />
  </TouchableOpacity>
);

export const PiercingsScreen = () => {
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
      <Text style={styles.sectionTitle}>Piercings</Text>
      <FlatList
        data={piercings}
        renderItem={({ item }) => (
          <PiercingItem item={item} onPress={() => handleImagePress(item)} />
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
            style={{ width: maxImageSize, height: maxImageSize, aspectRatio: 1, resizeMode: 'contain' }}
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
    fontWeight: 'bold',
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


export default PiercingsScreen;