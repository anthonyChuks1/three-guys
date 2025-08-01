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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-2.5 w-[90%] mx-auto mb-6">

      {/* Green Success Alert */}
      {isAdded && (
        <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10 animate-pulse">
          <span>Added</span>
          <span>✓</span>
        </div>
      )}
      {/* Horizontal Layout Container */}
      <div className="flex">
        {/* Image Container */}
        <div className="relative overflow-hidden w-48 h-32 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        </div>
        
        {/* Content Container */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            {/* Food Name */}
            <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{name}</h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
            
            {/* Rating & Delivery Time */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center text-amber-500">
                <span className="text-sm">⭐</span>
                <span className="ml-1 text-gray-700 font-medium text-sm">{rating}</span>
              </div>
              <div className="text-gray-500 text-sm">
                🕒 {deliveryTime}
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            {/* Price */}
            <div className="text-xl font-bold text-amber-600">
              ${price.toFixed(2)}
            </div>
            
            {/* Quantity Controls */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-white rounded-md transition-all duration-200 font-bold text-sm"
              >
                -
              </button>
              <span className="mx-2 font-semibold text-gray-800 min-w-[20px] text-center text-sm">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-white rounded-md transition-all duration-200 font-bold text-sm"
              >
                +
              </button>
            </div>
            
            {/* Add to Cart Button */}
            <button 
              onClick={() => handleAddToCart(addToCart)}
              disabled={isLoading}
              className={`py-2 px-4 rounded-lg font-semibold text-white transition-all duration-300 transform text-sm ${
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
      </div>
    </div>
  );
};

export default FoodCard;
