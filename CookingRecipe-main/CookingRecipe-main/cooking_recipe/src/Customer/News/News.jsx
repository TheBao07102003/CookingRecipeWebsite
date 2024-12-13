import React from "react";

const News = () => {
  return (
    <div
      className="news-container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FAF0DE",
      }}
    >
      <div
        className="header"
        style={{
          backgroundColor: "#FAF0DE",
          padding: "20px",
          textAlign: "center",
          borderBottom: "2px solid #593329",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "36px",
            color: "#8b4513",
          }}
        >
          CookCook News
        </h1>
      </div>
      <div
        className="date"
        style={{
          textAlign: "center",
          fontSize: "20px",
          margin: "10px 0",
          paddingBottom: "12px",
          color: "#8b4513",
          borderBottom: "2px solid #593329",
        }}
      >
        Daily Cooking News
      </div>
      <div
        className="content-container"
        style={{
          display: "flex",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <div
          className="left-column"
          style={{
            width: "60%",
            borderRight: "2px solid #593329",
            padding: "20px",
          }}
        >
          <div
            className="news-item"
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <img
              alt="A plate of plant-based seafood with various garnishes"
              height="200"
              src="/images/news1.png"
              width="250"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#8b4513",
                  margin: 0,
                }}
              >
                1. Food Trends: Plant-Based Seafood Takes Center Stage
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                As sustainability continues to rise in importance, plant-based
                seafood is gaining momentum. Companies like Good Catch and New
                Wave Foods are innovating with plant-based tuna, shrimp, and
                crab, offering consumers eco-friendly alternatives. Expect to
                see these products appear on more restaurant menus and grocery
                store shelves as culinary chefs experiment with textures and
                flavors that mimic the ocean's bounty.
              </p>
            </div>
          </div>
          <div
            className="news-item"
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <img
              alt="A person preparing sourdough bread at home"
              height="200"
              src="/images/news2.png"
              width="250"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#8b4513",
                  margin: 0,
                }}
              >
                2. Mastering the Art of Sourdough at Home
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                Sourdough bread, beloved for its tangy flavor and chewy texture,
                has never been more popular. Today, artisanal bakers are sharing
                their best tips on social media for creating the perfect
                sourdough loaf from scratch. Some key advice includes the
                importance of choosing the right flour and maintaining the
                perfect temperature for fermentation. If you're looking to step
                up your sourdough game, now's the time to dive into the world of
                wild yeast and slow fermentation.
              </p>
            </div>
          </div>
          <div
            className="news-item"
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <img
              alt="Various jars of fermented foods and spices"
              height="200"
              src="/images/news3.png"
              width="250"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#8b4513",
                  margin: 0,
                }}
              >
                3. Why Fermentation is the Secret to Deep, Complex Flavors
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                Fermentation continues to be a key technique in elevating
                flavors, whether you're making kimchi, miso, or homemade
                pickles. Experts believe fermentation not only adds complexity
                and depth to food, but it also helps enhance gut health. The
                trend is making its way into more home kitchens, with even
                novice cooks experimenting with different fermentation
                techniques to create unique and flavorful dishes.
              </p>
            </div>
          </div>
        </div>
        <div
          className="right-column"
          style={{
            width: "40%",
            padding: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              color: "#8b4513",
              margin: "0 0 20px 0",
            }}
          >
            Food Combinations to Avoid: Ingredients That Don't Pair Well and
            Their Effects
          </h2>
          <div
            className="food-combination"
            style={{
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#8b4513",
                margin: 0,
              }}
            >
              1. Milk and Citrus Fruits (Lemon, Orange, Grapefruit)
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Effect:</strong> Combining milk with acidic fruits like
              lemon or orange can cause the milk to curdle, leading to
              indigestion, bloating, and stomach discomfort.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Why:</strong> The acid in citrus fruits lowers the pH of
              milk, causing the protein casein to coagulate and making it harder
              for your body to digest.
            </p>
          </div>
          <div
            className="food-combination"
            style={{
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#8b4513",
                margin: 0,
              }}
            >
              2. Peanuts and Milk
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Effect:</strong> Mixing peanuts with milk can cause
              digestive distress, including bloating and indigestion.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Why:</strong> The proteins in peanuts and milk may
              interact in a way that slows digestion, leading to discomfort in
              the stomach.
            </p>
          </div>
          <div
            className="food-combination"
            style={{
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#8b4513",
                margin: 0,
              }}
            >
              3. Meat and Potatoes
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Effect:</strong> While this is a classic pairing, eating
              meat and potatoes together can sometimes lead to digestive
              discomfort, especially when consumed in large portions.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Why:</strong> Meat takes longer to digest due to its
              protein content, while potatoes (starch) digest faster. The body
              may struggle to process both at the same time, leading to feelings
              of heaviness and indigestion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
