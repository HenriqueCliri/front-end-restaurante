import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({placeholder, value, onChangeText}) => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#757575"/>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#BDBDBD"
                value={value}
                onChangeText={onChangeText}
            >

            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginVertical: 15,
    },
    input: {
        flex: 1,
        color: '#FFFFFF',
        paddingVertical: 10,
        marginLeft: 10,
        fontSize: 16,
    },
});

export default SearchBar;