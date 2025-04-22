import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect} from "react";

export const CartContext =createContext();

export const CartProvider =({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        const loadCart= async()=>{
            try{
                const storedCart = await AsyncStorage.getItem('cart');
                if (storedCart !== null){
                    setCartItems(JSON.parse(storedCart));
                }
            } catch(e) {
                console.error('Failed to load cart from storage', e)
            }
        }
        loadCart();
    }, []);

    useEffect(()=> {
        const saveCart = async () => {
            try {
                await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
            } catch(e) {
                console.error('Failed to save cart to storage', e);
            }
        };
        saveCart();
    }, [cartItems])

    const addToCart = (item) => {
        const exists = cartItems.find(cartItem => cartItem.id ===item.id);
        if(!exists) {
            setCartItems([...cartItems, item])
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};