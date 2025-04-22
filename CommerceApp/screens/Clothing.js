import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Clothing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clothing</Text>
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

export default Clothing