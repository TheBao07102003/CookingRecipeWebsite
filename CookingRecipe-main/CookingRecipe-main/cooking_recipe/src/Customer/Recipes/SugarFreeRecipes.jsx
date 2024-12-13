import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom for routing
import "./SugarFreeRecipes.css"; // Import styles

const SugarFreeRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch data for sugar-free recipes
    axios
      .get("/api/food/dietary/sugarfree") // Adjust the API endpoint for sugar-free recipes
      .then((response) => {
        setRecipes(response.data); // Update state with the received data
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // Empty array ensures this effect runs only once after initial render

  // Handle recipe card click event
  const handleRecipeClick = (foodId) => {
    navigate(`/cookingmethod/${foodId}`); // Navigate to the cookingmethod route with the recipe's foodId
  };

  return (
    <div className="sugarfree-recipes-container">
      {/* Background image for the title */}
      <h1
        style={{
          backgroundImage:
            "url(https://www.heart.org/-/media/Images/Healthy-Living/Healthy-Eating/sugar_piles.jpg)",
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
          left: "46%",
          fontWeight: "600",
          fontSize: "60px",
          color: "white",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Sugar Free
      </p>

      <div style={{ marginTop: "100px" }}>
        <div className="recipes-list">
          {recipes.map((recipe) => (
            <div
              className="recipe-card"
              key={recipe.foodId} // Use the actual foodId as the key
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
                  <strong>Ingredients to Prepare:</strong> {recipe.ingredients}
                </p>
                {/* Keeping the icon image unchanged */}
                <img
                  src={recipe.icon}
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

export default SugarFreeRecipes;
