import React from "react";
import TopRecipeCard from "../../Component/cardTopRecipe";
import Appetizer from "../../Component/Appetizer";
import MainCourse from "../../Component/MainCourse";
import SoupOrSalad from "../../Component/SoupOrSalad";
import Dessert from "../../Component/Dessert";
import { NavLink } from "react-router-dom";

import background1 from "../../assets/ImageHomepage/background1.png";
import foodlove from "../../assets/ImageHomepage/foodlove.png";

//Image top our recipe
import image117 from "../../assets/ImageHomepage/image117.png";
import image118 from "../../assets/ImageHomepage/image118.png";
import image119 from "../../assets/ImageHomepage/image119.png";
import image120 from "../../assets/ImageHomepage/image120.png";
import image121 from "../../assets/ImageHomepage/image121.png";
import image122 from "../../assets/ImageHomepage/image122.png";
import image123 from "../../assets/ImageHomepage/image123.png";
import image124 from "../../assets/ImageHomepage/image124.png";

//Appetizers
import image125 from "../../assets/ImageHomepage/image125.png";
import image126 from "../../assets/ImageHomepage/image126.png";
import image127 from "../../assets/ImageHomepage/image127.png";
import image128 from "../../assets/ImageHomepage/image128.png";

//Main Course
import image129 from "../../assets/ImageHomepage/image129.png";
import image130 from "../../assets/ImageHomepage/image130.png";
import image131 from "../../assets/ImageHomepage/image131.png";
import image132 from "../../assets/ImageHomepage/image132.png";
import image133 from "../../assets/ImageHomepage/image133.png";
import image134 from "../../assets/ImageHomepage/image134.png";
import image135 from "../../assets/ImageHomepage/image135.png";
import image136 from "../../assets/ImageHomepage/image136.png";

//Souporsalad
import image137 from "../../assets/ImageHomepage/image137.png";
import image138 from "../../assets/ImageHomepage/image138.png";
import image139 from "../../assets/ImageHomepage/image139.png";
import image140 from "../../assets/ImageHomepage/image140.png";
import image141 from "../../assets/ImageHomepage/image141.png";
import image142 from "../../assets/ImageHomepage/image142.png";
import image143 from "../../assets/ImageHomepage/image143.png";
import image144 from "../../assets/ImageHomepage/image144.png";

//Dessert
import image145 from "../../assets/ImageHomepage/image145.png";
import image146 from "../../assets/ImageHomepage/image146.png";
import image147 from "../../assets/ImageHomepage/image147.png";
import image148 from "../../assets/ImageHomepage/image148.png";

const Home = () => {
  // Dữ liệu các công thức với hình ảnh và tên
  const recipes = [
    {
      imageSrc: image117,
      recipeName: "California Crunch Bowl",
    },
    {
      imageSrc: image118,
      recipeName: "Shrimp Alfredo",
    },
    {
      imageSrc: image119,
      recipeName: "Panna Cotta",
    },
    {
      imageSrc: image120,
      recipeName: "Creme Brulee",
    },
    {
      imageSrc: image121,
      recipeName: "Bun Bo",
    },
    {
      imageSrc: image122,
      recipeName: "Tokbokki",
    },
    {
      imageSrc: image123,
      recipeName: "Tempura Udon",
    },
    {
      imageSrc: image124,
      recipeName: "The Duke Bowl",
    },
  ];
  const appetizers = [
    {
      imageSrc: image125, // Thay đổi URL của hình ảnh
      title: "Vietnamese spring rolls",
    },
    {
      imageSrc: image126, // Thay đổi URL của hình ảnh
      title: "Edamame",
    },
    {
      imageSrc: image127, // Thay đổi URL của hình ảnh
      title: "Satay",
    },
    {
      imageSrc: image128, // Thay đổi URL của hình ảnh
      title: "Vietnamese Fry Spring rolls",
    },
  ];

  const maincourse = [
    {
      imageSrc: image129,
      title: "Pad Thai",
    },
    {
      imageSrc: image130,
      title: "Sushi",
    },
    {
      imageSrc: image131,
      title: "Green Curry",
    },
    {
      imageSrc: image132,
      title: "Bulgogi",
    },
    {
      imageSrc: image133,
      title: "Kimbap",
    },
    {
      imageSrc: image134,
      title: "Vietnamese Braised Pork",
    },
    {
      imageSrc: image135,
      title: "Braised Fish with Pepper",
    },
    {
      imageSrc: image136,
      title: "Salmon Bowl",
    },
  ];
  const soupsalad = [
    {
      imageSrc: image137,
      title: "Canh Chua",
    },
    {
      imageSrc: image138,
      title: "Pho",
    },
    {
      imageSrc: image139,
      title: "Bun Bo",
    },
    {
      imageSrc: image140,
      title: "Banh Canh Cua",
    },
    {
      imageSrc: image141,
      title: "Kachumber Salad",
    },
    {
      imageSrc: image142,
      title: "Kimchi Jjigae",
    },
    {
      imageSrc: image143,
      title: "Miso Soup",
    },
    {
      imageSrc: image144,
      title: "Wonton Soup",
    },
  ];

  const dessert = [
    {
      imageSrc: image145,
      title: "Panna Cotta",
    },
    {
      imageSrc: image146,
      title: "Creme Brulee",
    },
    {
      imageSrc: image147,
      title: "Mango Sticky Rice",
    },
    {
      imageSrc: image148,
      title: "Gulab Jamun",
    },
  ];
  //khi click nó sẽ roll lên đỉnh trang
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <img
        src={background1}
        alt="ảnh 1"
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          textAlign: "center",
          color: "#593329",
          fontSize: 52,
          fontWeight: "900",
          wordWrap: "break-word",
        }}
      >
        Our top recipes
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          backgroundColor: "#f9f9f9",
          marginTop: "10px",
        }}
      >
        {recipes.map((recipe, index) => (
          <TopRecipeCard
            key={index}
            imageSrc={recipe.imageSrc}
            recipeName={recipe.recipeName}
          />
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          color: "#593329",
          fontSize: 52,
          fontWeight: "900",
          wordWrap: "break-word",
        }}
      >
        Recipes by four-course meal
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
        }}
      >
        Appetizer
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {appetizers.map((appetizer, index) => (
          <Appetizer
            key={index}
            imageSrc={appetizer.imageSrc}
            title={appetizer.title}
          />
        ))}
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
          marginTop: "15px",
        }}
      >
        Main Course
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {maincourse.map((maincourse, index) => (
          <MainCourse
            key={index}
            imageSrc={maincourse.imageSrc}
            title={maincourse.title}
          />
        ))}
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
          marginTop: "15px",
        }}
      >
        Soup or Salad
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {soupsalad.map((soupsalad, index) => (
          <SoupOrSalad
            key={index}
            imageSrc={soupsalad.imageSrc}
            title={soupsalad.title}
          />
        ))}
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
          marginTop: "15px",
        }}
      >
        Dessert
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {dessert.map((dessert, index) => (
          <Dessert
            key={index}
            imageSrc={dessert.imageSrc}
            title={dessert.title}
          />
        ))}
      </div>
      <div style={{ display: "flex", marginTop: "5%" }}>
        <div style={{ width: "55%", marginLeft: "15%" }}>
          <div
            style={{
              color: "#593329",
              fontSize: 48,
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Our happy food lovers
          </div>
          <div
            style={{
              color: "#593329",
              fontSize: 24,
              fontWeight: "400",
              width: "65%",
              marginTop: "15%",
            }}
          >
            I find cooking easy, and I believe you can do it too. Let’s share
            these recipes, and together we’ll create wonderful dishes filled
            with love and all our senses.
          </div>
          <div
            style={{
              color: "#593329",
              fontSize: 24,
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "10%",
            }}
          >
            CookCook
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <img
            src={foodlove}
            alt="cake"
            style={{
              height: "445px",
              width: "75%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#d2691e",
            borderRadius: "10px",
            padding: "20px",
            width: "80%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="text-content"
            style={{
              color: "#4b2e2e",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 40,
              }}
            >
              Find our story
            </h1>
            <p
              style={{
                fontSize: "1em",
                margin: "20px 0",
                width: "55%",
              }}
            >
              Cooking knows no gender, wealth, or social status. It is a
              passion, a source of life, and simply a way to inspire others each
              day. Join us and embrace the value of every dish together.
            </p>
            <button
              className="button"
              style={{
                backgroundColor: "#4b2e2e",
                color: "#ffffff",
                padding: "12px 60px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "1em",
                marginTop: "2%",
              }}
            >
              Let's find out
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#5A352D",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              display: "inline",
              fontSize: "36px",
              color: "#FFC86E",
              marginLeft: "10px",
              verticalAlign: "middle",
            }}
          >
            CookCook
          </h1>
          <div style={{ marginTop: "13px" }}>
            <NavLink
              to="/"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                margin: "0 15px",
                fontSize: "16px",
              }}
              activeStyle={{
                color: "#F4B400",
              }}
              onClick={scrollToTop} // Cuộn trang lên khi nhấp
            >
              Home
            </NavLink>
            <NavLink
              to="/OurStory"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                margin: "0 15px",
                fontSize: "16px",
              }}
              activeStyle={{
                color: "#F4B400",
              }}
              onClick={scrollToTop} // Cuộn trang lên khi nhấp
            >
              Our story
            </NavLink>
            <NavLink
              to="/Recipes"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                margin: "0 15px",
                fontSize: "16px",
              }}
              activeStyle={{
                color: "#F4B400",
              }}
              onClick={scrollToTop} // Cuộn trang lên khi nhấp
            >
              Recipes
            </NavLink>
          </div>
          <div
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
              marginTop: "16px",
            }}
          >
            © 2024 Brand, Inc. • Privacy • Terms • Sitemap
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
