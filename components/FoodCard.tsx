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
  // onAddToCart: () => void
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
    /**addToCart */
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
    <div className="bg-white rounded-lg shadow-md p-4 text-amber-950 hover:shadow-gray-300">
      {/**Temporary text color. Ignore*/}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>Rating: {rating}⭐</div>
      <div>Delivery: {deliveryTime}</div>
      <div className="font-bold">${price}</div>
      <div className="flex items-center space-x-2 ">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="font-extrabold"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="font-extrabold"
        >
          +
        </button>
      </div>
      <button onClick={() => handleAddToCart(addToCart)}>
        {isLoading ? "Adding..." : isAdded ? "Added!" : "Add To Cart"}
      </button>
    </div>
  );
};

export default FoodCard;
