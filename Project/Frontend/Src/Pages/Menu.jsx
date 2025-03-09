import React, { useState } from "react";
import "./Menu.css";

const menuData = [
  {
    id: 1,
    restaurant: "Spice Delight",
    foods: [
      { id: 101, name: "Butter Chicken", price: 250, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg" },
      { id: 102, name: "Paneer Tikka", price: 180, image: "https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=" },
    ],
  },
  {
    id: 2,
    restaurant: "Tandoori Express",
    foods: [
      { id: 103, name: "Tandoori Chicken", price: 300, image: "https://sinfullyspicy.com/wp-content/uploads/2014/07/1200-by-1200-images-2.jpg" },
      { id: 104, name: "Naan & Dal Makhani", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbQqHS_07eP3FfZHZrSEk62h77JnnWbQ7Ng&s" },
    ],
  },
  {
    id: 3,
    restaurant: "South Indian Flavors",
    foods: [
      { id: 105, name: "Dosa & Sambar", price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DHjd0AfKpwr1nsrAmnF4hPuXQx4mgN8QJw&s" },
      { id: 106, name: "Idli & Chutney", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGX9px1WXEZqKKub5ZCikX_2laZctjvDsMQ&s" },
    ],
  },
];

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
    alert(`${food.name} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2>🍽️ Explore Our Menu</h2>
      {menuData.map((restaurant) => (
        <div key={restaurant.id} className="restaurant">
          <h3>{restaurant.restaurant}</h3>
          <div className="food-items">
            {restaurant.foods.map((food) => (
              <div key={food.id} className="food-card">
                <img src={food.image} alt={food.name} />
                <h4>{food.name}</h4>
                <p>₹{food.price}</p>
                <button onClick={() => addToCart(food)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

