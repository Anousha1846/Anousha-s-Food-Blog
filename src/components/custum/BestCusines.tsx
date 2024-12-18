import { FocusCards } from "@/components/ui/FocusCards";
import thai from "../../../public/thai.webp";
import pakistan from "../../../public/pakistan.jpg";
import italianCuisine from "../../../public/italianCusine.jpg";
import japanese from "../../../public/japanese.jpeg";
import indian from "../../../public/indian.webp";
import mexican from "../../../public/maxican.jpg";

export default function BestCusines() {
  const cards = [
    {
      title: "Thai Cuisine",
      src: thai,
      description: "Mexican cuisine offers a fiesta of flavors with tacos, enchiladas, and guacamole. Spices like chili and cumin, alongside fresh ingredients, create mouthwatering dishes rich in culture, history, and culinary creativity.",
    },
    {
      title: "Pakistani Cuisine",
      src:pakistan ,
      description: "Pakistani cuisine is a flavorful mix of Mughal, Persian, and regional influences. From biryani to nihari, it features rich curries, grilled meats, and traditional bread, offering a bold and hearty experience.",
    },
    {
      title: "Italian Cuisine",
      src: italianCuisine,
      description: "Italian cuisine is a global favorite, renowned for pasta, pizza, and risotto. Simple yet flavorful ingredients like olive oil, tomatoes, and basil create comforting dishes full of warmth and tradition.",
    },
    {
      title: "Japanese Cuisine",
      src: japanese,
      description: "Japanese cuisine emphasizes freshness and balance with sushi, ramen, and tempura. Its artful presentation and delicate flavors reflect a respect for ingredients, creating dishes that are both delicious and visually stunning.",
    },
    {
      title: "Indian Cuisine",
      src: indian,
      description: "Pakistani cuisine is a flavorful mix of Mughal, Persian, and regional influences. From biryani to nihari, it features rich curries, grilled meats, and traditional bread, offering a bold and hearty experience.",
    },
    {
      title: "Mexican Cuisine ",
      src: mexican,
      description: "Mexican cuisine offers a fiesta of flavors with tacos, enchiladas, and guacamole. Spices like chili and cumin, alongside fresh ingredients, create mouthwatering dishes rich in culture, history, and culinary creativity.",
    },
  ];

  return(
    <div className=" bg-ivory lg:pb-12 pb-6 pt-1 lg:mb-12 mb-6">
    <h1 className="text-3xl md:text-5xl md:mt-24 mt-12 my-16 text-center font-bold bg-gradient-to-r from-[#9b1b30] via-[#D4AF37] to-[#6B7A4F] text-transparent bg-clip-text">
World&rsquo;s  Best Cusine
</h1>
  <FocusCards cards={cards}  />
  </div>
  )
  
}




