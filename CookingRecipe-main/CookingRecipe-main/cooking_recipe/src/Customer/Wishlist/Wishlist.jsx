import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Wishlist() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  // Kiểm tra trạng thái đăng nhập và lấy userId
  useEffect(() => {
    const checkLoginStatus = () => {
      const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (isUserLoggedIn) {
        const loggedInUserId = localStorage.getItem("userId");
        setUserId(loggedInUserId);
      }
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  // Fetch wishlist data from API
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!userId) {
        return;
      }

      try {
        const response = await axios.get(`/api/wishlist/${userId}`);
        setCards(response.data);
      } catch (err) {
        setError("Failed to load wishlist");
      }
    };

    if (userId) {
      fetchWishlist();
    }
  }, [userId]);

  // Handle item deletion
  const handleDelete = async (wishlistId) => {
    try {
      const response = await axios.delete(
        `/api/wishlist/${userId}/${wishlistId}`
      );
      if (response.status === 200) {
        setCards((prevCards) =>
          prevCards.filter((card) => card.wishlistId !== wishlistId)
        );
      }
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userId) {
    return (
      <div
        style={{
          backgroundImage: "url(/images/backgroundWishlist.png)",
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "32px",
            padding: "20px 40px",
            backgroundColor: "rgba(89, 51, 41, 0.9)",
            borderRadius: "15px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          You have to log in
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        backgroundImage: "url(/images/backgroundWishlist.png)",
        width: "100%",
        height: "600vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 38,
          border: "1px solid #593329",
          width: "50%",
          margin: "20px auto 20px auto",
          textAlign: "center",
          marginBottom: "20px",
          background: "#593329",
          borderRadius: "25px",
          fontWeight: "800",
        }}
      >
        Your Loved-list Cooking
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          justifyItems: "center",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.wishlistId}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              width: "200px",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(45deg, #F06292, #FFAB40)",
                padding: "1px",
              }}
            >
              <img
                src={card.image}
                alt={card.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "white",
                marginTop: "10px",
              }}
            >
              {card.name}
            </p>
            <button
              onClick={() => handleDelete(card.wishlistId)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              X
            </button>
            <Link
              to={`/cookingmethod/${card.foodId}`}
              style={{
                color: "#FFAB40",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              View Cooking Method
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
