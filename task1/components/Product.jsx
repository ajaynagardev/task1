import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const Product = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('products');
        if (storedProducts) setProducts(JSON.parse(storedProducts));
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error loading products',
        });
      }
    };
    fetchProducts();
  }, []);

  const deleteProduct = async (name) => {
    
  };

  const filteredProducts = products.filter(product =>

  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Text style={styles.heading}>Hi-Fi Shop & Service</Text>
      <Text style={styles.subHeading}>Audio shop on Rustaveli Ave 57. This shop offers both products and services</Text>
      
      <Text style={styles.sectionHeader}>Products</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={<Text>No Product Found</Text>}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteProduct(item.name)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.fab}
      ><Text style={{color:'white',fontSize:30}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Product;
