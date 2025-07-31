import FoodCard from "@/components/FoodCard";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header />
      {/* visual aid */}
      <FoodCard
        name="Burger"
        description="Simple burger"
        price={100.0}
        image="/images/burger.jpg"
        rating={5}
        deliveryTime="20-30 min"
        category="Burgers"
        onAddToCart={() => {}}
      />
    </>
  );
}
