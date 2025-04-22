import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Image,Dimensions } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import plus from '../assets/Plus.png';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';



const Home = () => {
  const {addToCart} = useContext(CartContext);

  const navigation = useNavigation();

  const [products, setproducts]= useState([]);
  const [loading, setloading] = useState(true);

  const getProducts= async ()=>{
    try{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setproducts(data);
    } catch(error) {
      console.error('Fetch error:', error);      
    } finally{
      setloading(false);
    }
  };

  useEffect(()=> {
    getProducts();
  },[]);

  if (loading) return <ActivityIndicator size ="small" color="blue"/>;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>OUR STORY</Text>
        <View style={styles.filters}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={()=> console.log('filter pressed')}>
              <MaterialCommunityIcons name="view-list" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={()=> console.log('filter pressed')}>
              <MaterialIcons name="filter-list" size={18} color="orange" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
      data={products}
      keyExtractor={(item)=> item.id.toString()}
      numColumns={2}
      renderItem={({item})=>(
        <View style={styles.card}>
          <TouchableOpacity onPress={()=> navigation.navigate('ProductDetail', {product: item})}>
            <Image source={{ uri: item.image}} style={styles.image}/>
          <TouchableOpacity onPress={()=> addToCart(item)} style={styles.plus}>
            <AntDesign name="pluscircleo" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}
const {width}=Dimensions.get('window');
const cardMargin=10;
const cardWidth=(width-(cardMargin*3))/2;

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',

  },
  headerContainer:{
    flexDirection: 'row',
    paddingTop: 20,
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Lato_400Regular',
    letterSpacing: 4,
  },

  filters:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 23,
  },

  icon:{
    height:34,
    width: 34,
    borderRadius: 17,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
  listContainer:{
    padding: cardMargin,
  },
  card: {
    flex: 1,
    margin: cardMargin,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  image:{
    width:100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: '#f5f5f5',
    alignSelf: 'center'
  }, 
  name: {
    fontFamily: 'Lato_400Regular'
  },
  price: {
    color: 'orange',
    fontFamily: 'Lato_400Regular',
    paddingTop: 5,
  },
  plus: {
    alignSelf:'flex-end',
    paddingBottom: 5,
  }

})

export default Home