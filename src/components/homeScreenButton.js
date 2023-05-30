import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreenButton = props => {
    const content = (
        
        <LinearGradient style={styles.button} colors={['#FE676E', '#C73866']}>
            <Text style={styles.text}>{props.text}</Text>
        </LinearGradient>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({

    button:{
        padding:13,
        margin: 10,
        width: 180,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent:"center",
        
        
        
    },
    text:{
        color: '#EEEEEE',
        fontSize: 20,
        fontFamily: 'Roboto-Black'
        
        
    }
})

export default HomeScreenButton;