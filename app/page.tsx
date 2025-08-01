import FoodCard from "@/components/FoodCard";
import Header from "@/components/Header";
import FoodLists from "@/db/FoodLists";


export default function Home() {
  return (
    <>
      <Header />
      {/* Food card grid*/}
      {FoodLists.map((food, index) => (
        <FoodCard key={index} {...food}/>
      ))}
    </>
  );
}
