import React, { useEffect } from 'react'
import {useState} from 'react'
const useFoodCard = () => {
  
 const  [isAdded, setIsAdded] = useState(false);
 const [quantity, setQuantity] = useState(1);
 const [isLoading, setIsLoading] = useState(false);

 const handleAddToCart = (onAddToCart: () => void) => {
  setIsLoading(true);  //loading message on button "Adding..."
  onAddToCart();       //Add the item to the cart
  setIsAdded(true);    //show success message on page

  setTimeout(() => {
    setIsLoading(false) //timeout loading message.. 
    setIsAdded(false)   //and success message 
    
  }, 2000)
 }
 
 return {
  isLoading,
  isAdded,
  quantity,
  setQuantity,
  handleAddToCart
 }
}

export default useFoodCard
