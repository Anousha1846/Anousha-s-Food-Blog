import thai from "../../public/thai.webp";
import pakistan from "../../public/pakistan.jpg";
import italianCuisine from "../../public/italianCusine.jpg";
import japanese from "../../public/japanese.jpeg";
import indian from "../../public/indian.webp";
import mexican from "../../public/maxican.jpg";
import chinese from "../../public/chinese.jpg";
import greek from "../../public/greek.jpeg";
import french from "../../public/french.jpeg";


export const dishes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: '🍝 Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Loved for its creamy, savory flavor and comforting texture. This timeless recipe is cherished by pasta enthusiasts for its richness and simplicity. It pairs beautifully with a light salad and a glass of white wine, creating an unforgettable dining experience. Perfect for cozy dinners or festive gatherings, Spaghetti Carbonara celebrates the heartwarming essence of Italian culinary tradition.',
    image: italianCuisine, // Italian Cuisine Image
  },
  {
    id: 2,
    name: 'Kung Pao Chicken',
    description: '🍗🥜 A Sichuan classic, Kung Pao Chicken combines juicy chicken pieces with crunchy peanuts and vibrant vegetables. Coated in a rich, spicy-sweet sauce, it delivers bold flavors in every bite. This dish is a perfect example of Chinese culinary artistry, blending textures and tastes to perfection. Often served with steamed rice or noodles, Kung Pao Chicken is ideal for a hearty meal that satisfies both the palate and the soul.',
    image: chinese, // Chinese Cuisine Image
  },
  {
    id: 3,
    name: 'Chicken Tacos',
    description: '🌮🍋 A Mexican delight, chicken tacos are a flavorful mix of soft tortillas, zesty salsa, and seasoned chicken. Topped with fresh veggies and a squeeze of lime, they deliver a burst of freshness and spice in every bite. Whether served as a street food staple or a party favorite, these tacos bring the vibrant spirit of Mexican cuisine to your table. Customize with guacamole, cheese, or spicy sauces for added flair.',
    image: mexican, // Mexican Cuisine Image
  },
  {
    id: 4,
    name: 'Butter Chicken',
    description: '🍛🧄 Butter Chicken is a creamy, rich, and mildly spiced curry that’s a hallmark of Indian cuisine. Tender chicken pieces simmered in a luscious tomato-based sauce make this dish irresistible. A favorite among curry enthusiasts, it’s often paired with naan, paratha, or steamed rice. Its silky texture and balanced spices cater to a wide range of tastes, making it a versatile dish suitable for both casual and festive occasions.',
    image: indian, // Indian Cuisine Image
  },
  {
    id: 5,
    name: 'Chicken Karahi',
    description: '🍖🌶️ A Pakistani specialty, Chicken Karahi is a robustly spiced dish cooked in a wok with tomatoes, chilies, and fresh ginger. Bursting with bold flavors, it’s a family favorite and a true representation of Pakistan’s rich culinary heritage. Typically served with naan or rice, it’s perfect for gatherings and special occasions. Its tantalizing aroma and vibrant presentation make Chicken Karahi a must-try dish for spice lovers everywhere.',
    image: pakistan, // Pakistani Cuisine Image
  },
  {
    id: 6,
    name: 'Coq au Vin',
    description: '🍷🍄 Coq au Vin is a quintessential French dish featuring chicken slow-braised in red wine with mushrooms, onions, and herbs. A culinary masterpiece, it combines simplicity with sophistication. Perfect for celebratory dinners or quiet evenings, this dish reflects the elegance of French cuisine. Its tender, flavor-infused meat pairs excellently with rustic bread or buttery mashed potatoes, creating a satisfying and memorable meal that embodies gourmet comfort food.',
    image: french, // French Cuisine Image
  },
  {
    id: 7,
    name: 'Sushi Platter',
    description: '🍣🌊 A Japanese favorite, the sushi platter features fresh seafood paired with vinegared rice and a variety of toppings. Elegant and delicious, this dish is perfect for fans of light, clean flavors. Each piece is a harmonious blend of delicate textures and tastes. Complement it with soy sauce, pickled ginger, and wasabi for a traditional experience. Sushi is more than a dish—it’s an art form that celebrates the beauty of simplicity.',
    image: japanese, // Japanese Cuisine Image
  },
  {
    id: 8,
    name: 'Thai Green Curry',
    description: '🍲🥥 Thai Green Curry is a fragrant, creamy dish made with chicken, coconut milk, and green curry paste. Infused with the vibrant flavors of lime leaves, lemongrass, and chilies, it delivers a perfect balance of spicy and sweet. Often paired with jasmine rice, this dish highlights the harmonious interplay of bold flavors and subtle textures. A staple of Thai cuisine, Green Curry is a sensory delight that brings warmth and richness to the table.',
    image: thai, // Thai Cuisine Image
  },
  {
    id: 9,
    name: 'Moussaka',
    description: '🍆🧀 A Mediterranean classic, Moussaka layers eggplant, minced meat, and a creamy béchamel sauce. Baked to golden perfection, it’s a hearty dish that embodies the rich flavors of Greek cuisine. Its satisfying layers and delicate seasoning make it a timeless favorite. Served with a fresh salad or crusty bread, Moussaka is perfect for a comforting family dinner or a festive occasion that celebrates Mediterranean culinary traditions.',
    image: greek, // Greek Cuisine Image
  },
];


export const Cuisines = [
  {
    id: 1,
    name: 'Italian Cuisine',
    description: 'Known for its pasta, pizza, and risotto. Uses fresh ingredients like tomatoes, basil, olive oil, garlic, and cheese.',
    image: italianCuisine ,
  },
  {
    id: 2,
    name: 'Chinese Cuisine',
    description: 'Features stir-fries, dumplings, noodles, and rice dishes. Rich in soy sauce, garlic, ginger, and diverse vegetables, creating complex, savory flavors.',
    image: chinese ,
  },
  {
    id: 3,
    name: 'Mexican Cuisine',
    description: 'Famous for tacos, burritos, and enchiladas. Ingredients like corn, beans, chili, avocado, and lime create flavorful, vibrant dishes with distinct spice levels.',
    image: mexican ,
  },
  {
    id: 4,
    name: 'Indian Cuisine',
    description: 'A rich blend of spices including cumin, coriander, turmeric, and garam masala. Popular dishes like biryani, curry, samosas, and butter chicken.',
    image: indian,
  },
  {
    id: 5,
    name: 'Pakistani Cuisine',
    description: 'A fusion of Persian, Afghan, and Indian flavors. Richly spiced dishes like biryani, nihari, haleem, kebabs, and karahi are staples.',
    image: pakistan ,
  },
  {
    id: 6,
    name: 'French Cuisine',
    description: 'Sophisticated with rich sauces, butter, and wine. Classic dishes include croissants, escargot, coq au vin, ratatouille, and decadent desserts like crème brûlée.',
    image: french ,
  },
  {
    id: 7,
    name: 'Japanese Cuisine',
    description: 'Known for sushi, sashimi, ramen, and tempura. Uses fresh seafood, rice, soy sauce, wasabi, miso, and pickled vegetables for clean, delicate flavors.',
    image: japanese
  },
  {
    id: 8,
    name: 'Thai Cuisine',
    description: 'Characterized by its balance of sweet, salty, spicy, and sour. Uses ingredients like coconut milk, lime, lemongrass, chilies, and garlic in diverse curries.',
    image: thai,
  },
  {
    id: 9,
    name: 'Greek Cuisine',
    description: 'Mediterranean flavors with ingredients like lamb, olive oil, herbs, and feta. Popular dishes include moussaka, souvlaki, Greek salad, tzatziki, and spanakopita.',
    image: greek,
  },
];

