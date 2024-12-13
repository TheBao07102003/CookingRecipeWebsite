import React, { useState, useEffect } from "react";
import AddTo from "../../../assets/images/AddToWishlist.jpg";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CookingMethod() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [methodData, setMethodData] = useState(null);
  const [steps, setSteps] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkLoginStatus = () => {
      const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (isUserLoggedIn) {
        const loggedInUserId = localStorage.getItem("userId");
        setUserId(loggedInUserId);
        setUsername(localStorage.getItem("username"));
      } else {
        setUserId(null);
        setUsername("");
      }
    };

    checkLoginStatus();
  }, []);

  // Fetch cooking method data
  useEffect(() => {
    const fetchMethodData = async () => {
      try {
        const response = await axios.get(`/api/cookingmethod/${recipeId}`);
        setMethodData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.error("Error fetching cooking method:", err);
      }
    };

    fetchMethodData();
  }, [recipeId]);

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comment/food/${recipeId}`);
        if (response.data && response.data.length > 0) {
          setComments(response.data); // Dùng trực tiếp data từ API
        } else {
          setComments([]);
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
        setComments([]);
      }
    };

    fetchComments();
  }, [recipeId]);

  // Fetch steps
  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await axios.get(`/api/step/${recipeId}`);
        if (response.data && response.data.length > 0) {
          setSteps(response.data);
        } else {
          setSteps([]);
        }
      } catch (err) {
        console.error("Error fetching steps:", err);
        setSteps([]);
      }
    };

    fetchSteps();
  }, [recipeId]);

  const handleAddToWishlist = async () => {
    if (methodData) {
      try {
        const response = await axios.post(
          "/api/wishlist",
          {
            userId: userId,
            foodId: methodData.foodId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Added to wishlist!",
            customClass: {
              icon: "rotate-y",
            },
            confirmButtonText: "OK",
          });
          navigate("/Wishlist");
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add to wishlist.",
          customClass: {
            icon: "rotate-y",
          },
          confirmButtonText: "Try Again",
        });
      }
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      const newCommentData = {
        description: newComment,
        date: new Date().toISOString().split("T")[0],
        foodId: parseInt(recipeId),
        userId: parseInt(userId),
        userName: username,
      };

      // Cập nhật UI trước
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");

      // Sau đó gọi API để lưu vào database
      try {
        const response = await axios.post("/api/comment", newCommentData);
        console.log("Response from server:", response);

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Comment added successfully.",
            customClass: {
              icon: "rotate-y",
            },
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        // Nếu API call thất bại, loại bỏ comment đã thêm
        setComments((prevComments) =>
          prevComments.filter(
            (comment) =>
              comment.description !== newCommentData.description ||
              comment.date !== newCommentData.date
          )
        );

        console.error("Error details:", error.response || error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add comment.",
          customClass: {
            icon: "rotate-y",
          },
          confirmButtonText: "Try Again",
        });
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cooking method: {error.message}</div>;
  }

  return (
    <div style={{ height: "90vh", scrollSnapType: "y mandatory" }}>
      {/* First section */}
      <div
        style={{
          scrollSnapAlign: "start",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundImage: "url(/images/backgroundImgCookingMethod.png)",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "30%",
            }}
          >
            {methodData && (
              <>
                <img
                  alt={methodData.name}
                  height="400px"
                  src={methodData.image}
                  width="400px"
                  style={{ borderRadius: "50%" }}
                />
                <h1
                  style={{
                    fontSize: "2em",
                    margin: "10px 0",
                    color: "White",
                    textAlign: "center",
                  }}
                >
                  {methodData.name}
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                    color: "White",
                    flexDirection: "column",
                    padding: "35px 50px",
                    backgroundColor: "#593329",
                    borderRadius: "15px",
                  }}
                >
                  <span>Rating: {methodData.rating}/5</span>
                </div>
                {localStorage.getItem("isLoggedIn") === "true" && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "50px",
                    }}
                  >
                    <img
                      src={AddTo}
                      alt="AddTo"
                      style={{
                        borderRadius: "40px",
                        cursor: "pointer",
                      }}
                      onClick={handleAddToWishlist}
                    />
                  </div>
                )}
              </>
            )}
          </div>

          {methodData && (
            <div style={{ width: "65%" }}>
              <div
                style={{
                  backgroundColor: "#fdf5e6",
                  padding: "20px",
                  borderRadius: "10px",
                  height: "200px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5em",
                    marginTop: "0",
                    color: "#593329",
                  }}
                >
                  {methodData.name} ({methodData.country} Cuisine)
                </h2>
                <p
                  style={{
                    fontSize: "1.3em",
                    lineHeight: "1.5",
                    color: "#593329",
                  }}
                >
                  {methodData.description}
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#fdf5e6",
                  padding: "20px",
                  borderRadius: "10px",
                  marginTop: "20px",
                  color: "#593329",
                  height: "auto",
                }}
              >
                <h2 style={{ fontSize: "1.5em", marginTop: "0" }}>
                  Ingredients
                </h2>
                <ul style={{ listStyleType: "none", padding: "0" }}>
                  {methodData.ingredient.split(",").map((ingredient, index) => (
                    <li
                      key={index}
                      style={{ fontSize: "1.3em", lineHeight: "1.3" }}
                    >
                      {ingredient.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second section */}
      <div
        style={{
          scrollSnapAlign: "start",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#593329",
          height: "auto",
        }}
      >
        <div style={{ width: "70%", margin: "auto", color: "white" }}>
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Step-by-step Recipe
          </div>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: "17px", textAlign: "left" }}>
                <ul>
                  <li>{step.description}</li>
                </ul>
              </div>
            </div>
          ))}
          {methodData && (
            <div
              style={{
                fontSize: "25px",
                color: "#F4C95D",
                textAlign: "center",
              }}
            >
              Now, you have a full guide to making {methodData.name} at home.
              Enjoy the process!
            </div>
          )}
        </div>
      </div>

      {/* Third section */}
      <div
        style={{
          scrollSnapAlign: "start",
          display: "flex",
          justifyContent: "space-around",
          height: "90vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "white",
            color: "#593329",
            fontWeight: "400",
            width: "60%",
          }}
        >
          <div
            style={{
              fontSize: "2em",
              marginBottom: "20px",
              fontWeight: "800",
            }}
          >
            Comments:
          </div>
          <div
            style={{
              backgroundColor: "#FFC86E",
              padding: "20px",
              borderRadius: "10px",
              color: "#593329",
              maxWidth: "800px",
              margin: "0 auto",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {comments.map((comment, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  borderBottom: "1.5px solid black",
                  paddingBottom: "15px",
                  textAlign: "left",
                }}
              >
                <strong>
                  {comment.userName} ({comment.date}):
                </strong>
                <p style={{ margin: "15px 0", textAlign: "left" }}>
                  {comment.description}
                </p>
              </div>
            ))}
          </div>

          {localStorage.getItem("isLoggedIn") === "true" && (
            <div style={{ marginTop: "30px", color: "#593329" }}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Type your comment here..."
                style={{
                  width: "60%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #593329",
                  fontSize: "1.1em",
                  marginBottom: "10px",
                  fontFamily: "Arial, sans-serif",
                  color: "#333",
                }}
              />
              <br />
              <button
                onClick={handleAddComment}
                style={{
                  backgroundColor: "#593329",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1em",
                }}
              >
                Add Comment
              </button>
            </div>
          )}
        </div>

        <div
          style={{
            marginTop: "20px",
            paddingTop: "30px",
            marginRight: "30px",
            width: "25%",
            height: "59vh",
            backgroundColor: "#593329",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "2.5em",
              marginBottom: "100px",
              textAlign: "center",
            }}
          >
            We love cooking !
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "40px",
            }}
          >
            <img style={{ width: "20%" }} src="/images/logo.png" alt="logo" />
          </div>
          <p
            style={{
              fontSize: "1.5em",
              lineHeight: "1.5",
              textAlign: "center",
              paddingTop: "0px",
              paddingBottom: "150px",
            }}
          >
            CookCook can Cook You can Cook
          </p>
          <p
            style={{
              fontSize: "1em",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            If you have any idea about this recipe, just leave your comments
            here. We would love to hear from our beloved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CookingMethod;
