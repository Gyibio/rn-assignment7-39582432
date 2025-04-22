import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import Entypo from '@expo/vector-icons/Entypo';
import checkout from '../assets/checkout.jpg'
import { Lato_400Regular } from '@expo-google-fonts/lato';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = () => {
    const {cartItems, removeFromCart} =useContext(CartContext)
    const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price),0);
  return (
    <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center',
     alignItems: 'center',backgroundColor: 'white', padding : 30,}}>
      <Image source={checkout} style={styles.header}/>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        
        renderItem={({item}) => (
            <View>
                <View style={styles.cartItemContainer}>
                    <Image source={{ uri: item.image }} style={styles.cartImage}/>
                    <View>                  
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.priceBlock}>
                            <Text style={styles.price}>${item.price}</Text>
                            <TouchableOpacity  onPress={()=> removeFromCart(item.id)} style={styles.cancel}>
                                <Entypo name="cross" size={19} color="red" />
                            </TouchableOpacity>                             
                        </View>

                    </View>
                </View>
               
            </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
           
        <View style={styles.footer}>
            <View style={styles.totalContainer} >
                <Text style={styles.total}>EST. TOTAL</Text>
                <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={styles.checkoutButton}>
                <FontAwesome name="shopping-bag" size={24} color="white"/>
                <Text style={styles.checkoutText}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        flex: 1,
    },
    header:{
        marginBottom: 10,
        height: 80,
        width: 200,
        resizeMode: 'contain',
    },
    cartImage: {
        height: 90,
        width: 80,
        marginRight: 15,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    title:{
        fontSize: 16,
        fontWeight: 300,
        marginBottom: 5,
    },
    cartItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    priceBlock:{
        flexDirection: 'row',
    },
    price: {
        fontFamily: 'Lato_400Regular',
        color: 'orange',
        fontSize: 15
    },
    cancel:{
        width: 22,        
        height: 22,
        borderRadius: 13,    
        borderWidth: 2,
        borderColor: 'red',
        position: 'absolute',
        marginLeft: 200,
        
    },

    totalContainer: {
        flexDirection: 'row',
        gap: 100,
        alignItems: 'center',
        marginTop: 100,
    },
    total: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 200,
        letterSpacing: 4,
    },
    amount: {
        fontSize: 25,
        color: 'orange',
        fontFamily: 'Lato_400Regular'
    },
    checkoutButton:{
        backgroundColor: 'black',
        flexDirection: 'row',
        gap: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    checkoutText: {
        color: 'white',
    }
})