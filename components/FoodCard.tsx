"use client";
import useFoodCard from "@/hooks/useFoodCard";
import React, { useEffect } from "react";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  deliveryTime: string;
  category: string;
}

/**Image container with food content */
const FoodCard = ({
  name,
  description,
  price,
  image,
  rating,
  deliveryTime,
  category,
}: FoodCardProps) => {
  const { isLoading, isAdded, quantity, setQuantity, handleAddToCart } =
    useFoodCard();
    
  const addToCart = () => {
    console.log(`Added ${name} to cart`);
  };
  
  useEffect(() => {
    console.log(`Quantity updated to: ${quantity} of ${name} added`);
  }, [quantity]);
  
  useEffect(() => {
    if(isAdded) console.log(`${quantity} of ${name} added to cart`);
  }, [isAdded]);
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 max-w-sm">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-6">
        {/* Food Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{name}</h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Rating & Delivery Time */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-amber-500">
            <span className="text-lg">⭐</span>
            <span className="ml-1 text-gray-700 font-medium">{rating}</span>
          </div>
          <div className="text-gray-500 text-sm">
            🕒 {deliveryTime}
          </div>
        </div>
        
        {/* Price */}
        <div className="text-2xl font-bold text-amber-600 mb-4">
          ${price.toFixed(2)}
        </div>
        
        {/* Quantity Controls */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-700 font-medium">Quantity:</span>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-white rounded-md transition-all duration-200 font-bold"
            >
              -
            </button>
            <span className="mx-3 font-semibold text-gray-800 min-w-[24px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-white rounded-md transition-all duration-200 font-bold"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={() => handleAddToCart(addToCart)}
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 transform ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : isAdded 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-amber-500 hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {isLoading ? "Adding..." : isAdded ? "Added! ✓" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
