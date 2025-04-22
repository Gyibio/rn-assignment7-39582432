import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'

import share from '../assets/Export.png';
import noBleach from '../assets/Do Not Bleach.png';
import tumbleDry from '../assets/Do Not Tumble Dry.png';
import noWash from '../assets/Do Not Wash.png';
import iron from '../assets/Iron Low Temperature.png';
import truck from '../assets/Shipping.png';
import Up from '../assets/Up.png';
import AntDesign from '@expo/vector-icons/AntDesign';

import { CartContext } from '../context/CartContext';
import Cautions from '../components/Cautions';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetail = ({ route }) => {
    const {product} = route.params
    const {addToCart} = useContext(CartContext);
  return (
    <ScrollView style={ styles.container}>
      <Image source ={{uri: product.image}} style={styles.image}/>
      <Text style ={styles.title}>{product.title}</Text>     
      {/* <Text>{product.description}</Text> */}

      <View style={styles.priceBlock}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity><Image source={share} style={styles.export}/></TouchableOpacity>
      </View>
      
      <Text style={styles.materials}>MATERIALS</Text>

      <View style={styles.lineBlock}>
        <Text style={styles.line}>We work with monitoring programmes to</Text>
        <Text style={styles.line}>ebsure compliance with safety, health and</Text>
        <Text style={styles.line}>quality standards for our products</Text>
      </View>  

      <Cautions image={noBleach} text={'Do not use bleach'} />
      <Cautions image ={tumbleDry} text={'Do not tumble dry'}/>
      <Cautions image ={noWash} text={'Dry clean with tetrachloroethylene'}/>
      <Cautions image ={iron} text={'Iron at a maximum of 110C/230F'}/>

      <View style={styles.divider}></View>

      <View style={styles.shippingLine}>
        <Image source={truck}/>
        <Text style={styles.shippingNote}>Free Flat Rate Shipping</Text>
        <Image source={Up} style={styles.up}/>
      </View>
      
      <View style={styles.deliveryDateBlock}>
        <Text style={styles.deliveryDate}>Estimated to be deivered on</Text>
        <Text style={styles.deliveryDate}>09/11/2021 - 12/11/21</Text>
      </View>

      <TouchableOpacity style={styles.cartButton} onPress={()=> addToCart(product)}>
        <AntDesign name="plus" size={24} color="white" />
        <Text style={styles.cartText}>ADD TO BASKET</Text>
        <AntDesign name="hearto" size={24} color="white" style={styles.heart} />
      </TouchableOpacity>

    </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    flex: 2,
    backgroundColor: 'white',
  },
  image:{
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    // backgroundColor: '#f5f5f5',
    padding:25,
  },
  priceBlock:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:25,
    paddingRight: 25,
  },
  title:{
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 25,
  },
  export:{
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },

  price: {
    fontSize:25,
    color: 'orange',
    fontFamily: 'PlayfairDisplay_400Regular'
  },
  materials: {
    fontSize: 16,
    letterSpacing: 3,
    paddingTop: 30,
    fontWeight: 300,
    paddingLeft: 25,
  },
  lineBlock:{
    paddingTop: 10,
    paddingLeft: 25,
  },
  line:{
    fontWeight: 200,
    letterSpacing: 1,
    lineHeight: 25,
    fontSize: 15,
  },

  divider: {
    height: 1,
    width: '75%',
    backgroundColor: 'lightgray',
    marginTop: 20,
    marginLeft: 25,
  },
  shippingLine:{
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
    paddingLeft: 25,
  },
  shippingNote: {
    paddingLeft: 8,
    fontWeight: 300,
  },
  up:{
    marginLeft: 130,
  },
  deliveryDateBlock:{
    marginTop: 5,
    marginLeft: 57,
    font: 'gray',
  },
  deliveryDate: {
    paddingTop: 5,
    color: 'gray',

  },
  cartButton: {
    backgroundColor: 'black',
    height: 80,
    width: '100%',
    flexDirection: 'row',
    marginTop: 200,
    alignItems: 'center',
    paddingLeft: 25,
    
  },
  cartText: {
    color: 'white',
    marginLeft: 25
  },
  heart: {
    marginLeft:150,
  }


})