import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Header = ({location, onCartPress}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.locationContainer}>
                <Ionicons name="location-sharp" size={20} color="#FFEB3B"/>
                <View style={styles.locationText}>{location}</View>
            </View>

            <TouchableOpacity onPress={onCartPress} style={styles.cartButton}>
                <Ionicons name="cart" size={24} color="#FFEB3B"></Ionicons>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#212121',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    cartButton: {
        padding: 5,
    }
});

export default Header;