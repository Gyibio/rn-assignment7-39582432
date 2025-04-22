import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Locations = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Locations</Text>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },


    title: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})

export default Locations