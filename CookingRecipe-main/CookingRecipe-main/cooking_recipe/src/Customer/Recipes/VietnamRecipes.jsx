import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom for routing
import "./VietnamRecipes.css"; // Import styles (rename the CSS file as well)

const VietnamRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("/api/food/country/vietnam") // Adjust the API endpoint for Vietnam
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
    <div className="vietnam-recipes-container">
      {/* Background image for the title */}
      <h1
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/4cf4/c0cc/a74c15f7e69af68fe3f72b9e4a34ff1e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FUYTQppUCAyxitY38UNxKwgb66NqElMGs-H2~DfUM8L8ekpggkQqry3QyL6Lz5ju8pUV1657eQ90QG41yaJLRsE92Cvkp198hI-PXe5~Jc-m7UROSCq4GGodIqOeIt0yGNTWg6o2GT-U9V3650CDPs9F-SlpQshGAIog4bfDXiQaGQs8~Dg9H9DXTxJzT9rDWEU2zUbFgrBhLH7w4g~HERN8zitX2qoJRyWbufoRP81vJr10aaT6BgVq9UTRZZ-XMIU4A8G8wuIYIZ0tCNhP6IGodkyru3aMM-SMGZ8hHXEQQ-gYmHAlWcyglyHOQouWQrqF~vZbQM-qZ9vMHTArWA__)", // Replace with an appropriate image URL for Vietnam
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
        Vietnam
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

export default VietnamRecipes;
