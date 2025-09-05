import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress, style, textStyle}) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Title>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical:15,
        paddingHorizontal:20,
        borderRadius:8,
        alignItems : 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize:16,
        fontWeight: 'bold',
    },
});

export default Button;