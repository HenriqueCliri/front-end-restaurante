import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native';
import { fetchAllProducts} from '../api/products';
import ProductCard from '../components/ProductCard';
import { SearchBar } from 'react-native-screens';

const FeaturedCard = ({imageSource, style}) => (
  <View>
    <Image source={imageSource} style={styles.featuredImage} resizeMode="cover" />
  </View>
);

const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
  
        const mockCategories = [
          {id: 1, name: 'ALMOÇO'},
          {id: 2, name: 'ALMOÇO'},
          {id: 3, name: 'ALMOÇO'},
          {id: 4, name: 'ALMOÇO'},
        ]
        setCategories(mockCategories);
        
      } catch (err) {
        setError('Não foi possível carregar os produtos. Tente novamente.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <ProductCard product={item} onPress={() => {
      navigation.navigate('ProductDetail', {ProductId: item.id})}} />
    )
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  }

  const filteredProducts = selectedCategory 
  ? products.filter(p => p.category && p.category.name === selectedCategory)
  : products;
  
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FFEB3B" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header location="Caucaia, CE" onCartPress={() => navigation.navigate('Cart')}/>
      <ScrollView style={styles.contentScroll}>
      <Text style={styles.welcomeText}>Sua refeição com o mais completo tempero nordestino</Text>
      
      <SearchBar
        placeholder="Pesquisar"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      
      <View style={styles.featuredContainer}>
        <FeaturedCard imageSource={require('../../assets/featured_meal_1.png')} style={styles.featuredCardLeft} />
        <FeaturedCard imageSource={require('../../assets/featured_meal_2.png')} style={styles.featuredCardLeft} /> 
      <View/>

      <Text style={styles.sectionTitle}>Cardápio</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === item.name && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(selectedCategory === item.name ? null: item.name)}
          >

          </TouchableOpacity>
        )}
      >

      </FlatList>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentScroll: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingTop: 20,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  featuredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    paddingBottom: 20,
  },
  errorText: {
    color: 'red',
  },
  categoryButton: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  selectedCategoryButton: {
    color: '#FFFFFF'
  }
});

export default HomeScreen;