import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Home from './screens/Home';
import Locations from './screens/Locations';
import Jewelery from './screens/Jewelery';
import Electronic from './screens/Electronic';
import Clothing from './screens/Clothing';
import Blog from './screens/Blog';
import ProductDetail from './screens/ProductDetail';


import {useFont,PlayfairDisplay_400Regular} from '@expo-google-fonts/playfair-display';
import {Lato_300Light, Lato_400Regular} from '@expo-google-fonts/lato';
import { useFonts } from 'expo-font';

import bag from './assets/shopping bag.png'
import search from './assets/Search.png'
import Menu from './assets/Menu.png'
import logo from './assets/logo.jpg'
import close from './assets/Close.png'
import { CartProvider } from './context/CartContext';
import Cart from './screens/Cart';

export default function App() {
  const {width} = Dimensions.get('window');

  const [fontsLoaded]=useFonts({
    PlayfairDisplay_400Regular,
    Lato_400Regular
  });

  if(!fontsLoaded){
    return null
  }

  const MyDrawer = createDrawerNavigator();

  const CustomDrawerContent=(props)=>{
    return(
      <DrawerContentScrollView {...props}>
        <View style={styles.cancel}>
          <TouchableOpacity onPress={()=> props.navigation.closeDrawer()}>
          <Image source={close}/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.name}>ERIC ATSU</Text>
          <View style={styles.line}/>
        </View>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    )
  }
  return (
    <CartProvider>
      <NavigationContainer>
        <MyDrawer.Navigator drawerContent={(props)=> <CustomDrawerContent {...props}/>} screenOptions={({navigation}) => ({
          drawerType: 'front',
          drawerStyle:{
            width: width * 0.5,
          },
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'black',
          drawerActiveBackgroundColor: 'transparent',
          drawerLabelStyle: {
            letterSpacing: 1,
          },
          headerTitle: ()=>(
            <View style={styles.headerTitleContainer}>
              <Image source={logo} style={styles.logo}/>
            </View>
          ),
          headerTitleStyle: {
            fontFamily: 'PlayfairDisplay_400Regular',
          },
          headerRight:()=> (
            <View style={styles.headerRight}>
              <View style={styles.search}>
                <TouchableOpacity onPress={()=> console.log('Search Pressed')}><Image source={search}/></TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=> navigation.navigate('Cart')}><Image source={bag}/></TouchableOpacity>
            </View>
          ),
          headerLeft:()=>(
            <View style={styles.menu}>
              <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                <Image source={Menu} style={styles.icon}/>
              </TouchableOpacity>
            </View>
          ),
          
          headerStyle:{
            borderBottomWidth:0,
            borderBottomColor: 'white',
            shadowOpacity: 0,
            
          }
          
        })}>
          <MyDrawer.Screen name = 'Store' component={Home} />
          <MyDrawer.Screen name = 'Locations' component={Locations}/>
          <MyDrawer.Screen name = 'Blog' component={Blog}/>
          <MyDrawer.Screen name = 'Jewelery' component={Jewelery} />
          <MyDrawer.Screen name = 'Electronic' component={Electronic} />
          <MyDrawer.Screen name = 'Clothing' component={Clothing} />
          <MyDrawer.Screen name = 'ProductDetail' component={ProductDetail}
          options={{
            drawerItemStyle: {display: 'none'}
          }}
          />
          <MyDrawer.Screen name = 'Cart' component={Cart}
          options={{
            drawerItemStyle: {display: 'none'}
          }}
          />
        </MyDrawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerRight:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
  },
  search: {
    paddingRight: 15,
  },
  menu: {
    marginLeft: 25,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily:'playfairDisplay_400Regular',
    fontSize: 18,
  },
  logo:{
    height: 120,
    width: 120,
    resizeMode: 'contain',
    paddingRight: 10,
    paddingTop: 5,
  },
  cancel: {
    marginLeft: 12,
  },
  name: {
    paddingTop: 20,
    marginLeft: 15,
    fontFamily: 'Lato_400Regular',
    letterSpacing: 4,
    fontSize: 16,
  },
  line: {
    height: 1,
    width: 95,
    backgroundColor: 'orange',
    // backgroundColor: '#d9822b',
    marginTop: 10,
    marginLeft: 21,
    marginBottom: 10,
  }
  

  
});
