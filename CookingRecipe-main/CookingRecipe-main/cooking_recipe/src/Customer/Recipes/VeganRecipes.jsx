import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./VeganRecipes.css"; // Thay thế bằng file CSS phù hợp

const VeganRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios
      .get("/api/food/dietary/Vegetarian") // Fetch từ API dành cho Vegetarian
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Handle recipe card click event
  const handleRecipeClick = (foodId) => {
    navigate(`/cookingmethod/${foodId}`); // Navigate to the cookingmethod route with the foodId
  };

  return (
    <div className="vegan-recipes-container">
      <h1
        style={{
          backgroundImage:
            "url(https://assets.clevelandclinic.org/transform/db02fd57-39b0-445b-ab4e-783e647c9e73/array-vegan-foods-1488883191)", // Background image for Vegan Recipes
          filter: "blur(4px)",
          padding: "150px",
        }}
      >
        .
      </h1>
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
        Vegetarian
      </p>

      <div style={{ marginTop: "100px" }}>
        <div className="recipes-list">
          {recipes.map((recipe) => (
            <div
              className="recipe-card"
              key={recipe.foodId} // Use foodId as the key
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
                  <strong>Ingredients:</strong> {recipe.ingredient || "N/A"}
                </p>
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

export default VeganRecipes;
