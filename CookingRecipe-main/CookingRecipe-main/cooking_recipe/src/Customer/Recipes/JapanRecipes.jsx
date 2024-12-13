import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom for routing
import "./JapanRecipes.css"; // Import styles for Japan

const JapanRecipes = () => {
  const [recipes, setRecipes] = useState([]); // State to hold recipes data
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch data from the backend for Japan recipes
    axios
      .get("/api/food/country/japan") // Adjust the API endpoint for Japan
      .then((response) => {
        setRecipes(response.data); // Update state with the received data
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // Empty array ensures this effect runs only once after initial render

  // Handle recipe card click event
  const handleRecipeClick = (foodId) => {
    navigate(`/cookingmethod/${foodId}`); // Navigate to the cookingmethod route with the recipe's id
  };

  return (
    <div className="japan-recipes-container">
      {/* Background image for the title */}
      <h1
        style={{
          backgroundImage:
            "url(https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2023/04/fujiyoshida-view-scaled-e1680427764989.jpg?resize=2000%2C800&ssl=1)", // Japan background image
          filter: "blur(4px)",
          padding: "150px",
        }}
      >
        .
      </h1>
      {/* Title centered on top */}
      <p
        style={{
          position: "absolute",
          top: "160px",
          left: "48%",
          fontWeight: "600",
          fontSize: "60px",
          color: "white",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Japan
      </p>

      <div style={{ marginTop: "100px" }}>
        <div className="recipes-list">
          {recipes.map((recipe) => (
            <div
              className="recipe-card"
              key={recipe.foodId} // Use the actual recipe id as the key
              onClick={() => handleRecipeClick(recipe.foodId)} // Call handleRecipeClick on click
            >
              <div className="recipe-image-container">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="recipe-image"
                />
                <h3 className="recipe-name">{recipe.name}</h3>
              </div>
              <div className="recipe-info">
                <p>{recipe.description}</p>
                <p>
                  <strong>Level:</strong> {recipe.level}
                </p>
                <p>
                  <strong>Time:</strong> {recipe.time}
                </p>
                <p>
                  <strong>Ingredients:</strong> {recipe.ingredient}
                </p>
                {/* Keeping the icon image unchanged */}
                <img
                  src="/images/dish-icon.svg"
                  alt="Dish Icon"
                  className="recipe-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JapanRecipes;
