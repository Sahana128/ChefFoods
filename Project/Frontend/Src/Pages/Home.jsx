import React, { useState } from "react";
import "./Home.css";

const foodItems = [
  { id: 1, name: "Butter Chicken", state: "Punjab", image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400" },
  { id: 2, name: "Hyderabadi Biryani", state: "Telangana", image: "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/68b1e-bangalore-biryani.jpg?fit=1000%2C667&ssl=1" },
  { id: 3, name: "Dhokla", state: "Gujarat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQ_ywTsl1l_oEJHiP17VGZoipj8UrGbVs-g&s" },
  { id: 4, name: "Misal Pav", state: "Maharashtra", image: "https://img-global.cpcdn.com/recipes/86b05c89e5362d7a/400x400cq70/photo.jpg" },
  { id: 5, name: "Rasgulla", state: "West Bengal", image: "https://www.kuchpakrahahai.in/wp-content/uploads/2020/05/Rasgulla-2BRecipe-2Bin-2BPressure-2BCooker.jpg" },
  { id: 6, name: "Idli Sambar", state: "Tamil Nadu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3B66GSibHBUaI3f7ksSJAFxqg0JaTqwAnA&s" },
  { id: 7, name: "Litti Chokha", state: "Bihar", image: "https://i0.wp.com/onewholesomemeal.com/wp-content/uploads/2020/01/Litti-Chokha.jpg?fit=864%2C1080&ssl=1" },
  { id: 8, name: "Pakhala Bhata", state: "Odisha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Rk2GMl0ra5KR1nJJha-2eMsQ1L3Oip0Luw&s" },
];

const Home = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="home-container">
      <header className="hero">
        <h1>🍽️ Taste the Best from Every State! 🇮🇳</h1>
        <p>Pick your favorite dish and enjoy doorstep delivery.</p>
      </header>

      <div className="food-menu">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p className="state-name">{item.state}</p>
            <div className="button-group">
              <button className="order-btn">Order Now</button>
              <button
                className={`fav-btn ${favorites.includes(item.id) ? "selected" : ""}`}
                onClick={() => toggleFavorite(item.id)}
              >
                {favorites.includes(item.id) ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
