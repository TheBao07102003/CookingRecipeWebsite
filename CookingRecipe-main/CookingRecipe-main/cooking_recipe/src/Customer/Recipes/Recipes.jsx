import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recipes.css"; // Import CSS for styling

const Recipes = () => {
  const navigate = useNavigate();

  const handleFilterClick = (filter) => {
    if (filter === "Vietnam") {
      navigate("/Recipes/vietnam");
    }
    if (filter === "USA") {
      navigate("/Recipes/usa");
    }
    if (filter === "Japan") {
      navigate("/Recipes/japan");
    }
    if (filter === "China") {
      navigate("/Recipes/china");
    }
    if (filter === "No Dairy") {
      navigate("/Recipes/nodairy");
    }
    if (filter === "Sugar Free") {
      navigate("/Recipes/sugarfree");
    }
    if (filter === "Gluten Free") {
      navigate("/Recipes/glutenfree");
    }
    if (filter === "Vegan") {
      navigate("/Recipes/vegan");
    }
    if (filter === "Boiling") {
      navigate("/Recipes/boiling");
    }
    if (filter === "Stir-Frying") {
      navigate("/Recipes/stirfrying");
    }
    if (filter === "Roasting") {
      navigate("/Recipes/roasting");
    }
    if (filter === "Steaming") {
      navigate("/Recipes/steaming");
    }
  };

  return (
    <div className="recipes-container">
      <h1>What's on your cooking agenda today?</h1>

      {/* Country Section */}
      <div className="recipes-section">
        <h2>Country</h2>
        <div className="recipes-options">
          {["Vietnam", "USA", "Japan", "China"].map((country) => (
            <div
              key={country}
              className="recipe-option"
              onClick={() => handleFilterClick(country)}
            >
              <img
                src={`/images/${country.toLowerCase()}.png`}
                alt={country}
                className="recipe-image"
              />
              <p>{country}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dietary Section */}
      <div className="recipes-section">
        <h2>Dietary</h2>
        <div className="recipes-options">
          {["No Dairy", "Sugar Free", "Gluten Free", "Vegan"].map((dietary) => (
            <div
              key={dietary}
              className="recipe-option"
              onClick={() => handleFilterClick(dietary)}
            >
              <img
                src={`/images/${dietary.replace(" ", "-").toLowerCase()}.png`}
                alt={dietary}
                className="recipe-image"
              />
              <p>{dietary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cooking Method Section */}
      <div className="recipes-section">
        <h2>Cooking Method</h2>
        <div className="recipes-options">
          {["Boiling", "Stir-Frying", "Roasting", "Steaming"].map((method) => (
            <div
              key={method}
              className="recipe-option"
              onClick={() => handleFilterClick(method)}
            >
              <img
                src={`/images/${method.toLowerCase()}.png`}
                alt={method}
                className="recipe-image"
              />
              <p>{method}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
