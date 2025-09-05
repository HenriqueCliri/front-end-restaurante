import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import {fetchProductById} from '../api/products';
import {addToCart} from '../api/cart';

const ProductDetailScreen = ({route, navigation}) => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const {productId} = route.params;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProductById(productId);
                setProduct(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [productId]);

    const handleAddToCart = async () => {
        try {
            await addToCart(productId, quantity);
            Alert.alert('Sucesso!', `${quantity} ${product.name} adicionado(s) ao carrinho.`);
        } catch (err) {
            Alert.alert('Erro', 'Não foi possível adicionar o item ao carrinho.');
        }
    };

    if(loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    
    if(!product) {
        return (
            <View style={styles.center}>
                <Text>Produto não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={{uri: product.imageUrl}}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.content}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                        <Text style={styles.quantityButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                        <Text style={styles.quantityButton}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                    <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
    },
    content: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    quantityButton: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    quantityText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        mariginTop: 20,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProductDetailScreen;