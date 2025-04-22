import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'
import { Lato_400Regular } from '@expo-google-fonts/lato'

 
const Cautions = ({image, text}) => {
  return (
        <View style={styles.caution}>
            <Image source ={image}/><Text style={styles.cautionText}>{text}</Text>
        </View>

  )
}

export default Cautions

const styles= StyleSheet.create({
    caution:{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        paddingTop: 15,
        paddingLeft: 25,
    },
    cautionText: {
        fontWeight: '200',
    }
})