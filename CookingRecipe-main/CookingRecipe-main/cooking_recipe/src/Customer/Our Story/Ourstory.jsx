import React from "react";
import ourstory from "../../assets/images/ourstory.png";

const OurStory = () => {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",

          color: "#5A2D1A",
          padding: "20px 0",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "36px" }}>OUR STORY</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#5A2D1A",
          padding: "20px",
          borderRadius: "10px",
          color: "#fff",
        }}
      >
        <div
          style={{
            width: "60%",
            paddingRight: "20px",
          }}
        >
          <p style={{ margin: "0 0 20px", lineHeight: "1.6" }}>
            At <strong>CookCook</strong>, our journey began with a shared
            passion for cooking among individuals who, despite lacking
            professional culinary training, were eager to explore the art of
            food. We recognized that many aspiring cooks faced the same
            challenges—searching for accessible recipes and guidance in the
            kitchen. Inspired by this collective desire to learn and create, we
            set out to build a community that would empower everyone to embrace
            the joy of cooking.
          </p>
          <br />
          <p style={{ margin: "0 0 20px", lineHeight: "1.6" }}>
            <strong>CookCook</strong> is more than just a platform; it's a
            vibrant community where home cooks of all levels can discover and
            realize recipes from around the globe. Whether you're craving savory
            dishes, delectable desserts, or even plant-based options, we offer a
            diverse array of recipes that cater to every taste and budget. From
            simple meals to intricate culinary creations, our collection is
            designed to inspire creativity and confidence in the kitchen.
          </p>
          <br />
          <p style={{ margin: "0 0 20px", lineHeight: "1.6" }}>
            Our mission goes beyond just providing recipes; we aim to elevate
            the quality of life for our members by enhancing the nutritional
            value and enjoyment of their meals. We believe that cooking is not
            just about sustenance; it's about nurturing relationships, fostering
            creativity, and bringing people together. At{" "}
            <strong>CookCook</strong>, we are dedicated to helping you craft
            memorable meals not only for yourself but also for the loved ones
            who share your table.
          </p>
          <br />
          <p style={{ margin: "0 0 20px", lineHeight: "1.6" }}>
            Join us on this flavorful journey, and let <strong>CookCook</strong>{" "}
            be your trusted companion in transforming everyday cooking into an
            extraordinary experience!
          </p>
        </div>
        <div
          style={{
            width: "35%",
          }}
        >
          <img
            src={ourstory}
            alt="A delicious breakfast spread with fried eggs, croissant sandwich, salad, and various drinks."
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
