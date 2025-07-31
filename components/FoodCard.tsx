
import React from 'react'

interface FoodCardProps {
  name: string
  description: string
  price: number
  image: string
  rating: number
  deliveryTime: string
  category: string
  onAddToCart: () => void
}

/**Image container with food content */
const FoodCard = ({name, description, price, image, rating,deliveryTime, category, onAddToCart} : FoodCardProps) => {
  return (
  <div className="bg-white rounded-lg shadow-md p-4">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4"/>
    <h3>{name}</h3>
    <p>{description}</p>
    <div>Rating: {rating}⭐</div>
    <div>Delivery: {deliveryTime}</div>
    <div className="font-bold">${price}</div>
    <button>Add to Cart</button>
  </div>
  )
}

export default FoodCard
