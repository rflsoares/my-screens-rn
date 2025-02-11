import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Ionicons
                style={styles.icon}
                name={props.iconName}
                size={props.iconSize}
                color={props.iconColor}
            />
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#b7c4c4',

    },
    icon: {
        textAlign: 'center',
        marginBottom: 10,
    }
});



export default Header