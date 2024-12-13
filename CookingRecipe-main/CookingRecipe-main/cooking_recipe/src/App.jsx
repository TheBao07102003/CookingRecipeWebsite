import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Customer/Home/Home";
import OurStory from "./Customer/Our Story/Ourstory";
import Opening from "./Customer/Screen/Opening";
import Login from "./Customer/Screen/Login";
import Signup from "./Customer/Screen/Signup";
import Logout from "./Customer/Screen/Logout";
import Recipes from "./Customer/Recipes/Recipes";
import VietnamRecipes from "./Customer/Recipes/VietnamRecipes";
import USARecipes from "./Customer/Recipes/USARecipes";
import JapanRecipes from "./Customer/Recipes/JapanRecipes";
import ChinaRecipes from "./Customer/Recipes/ChinaRecipes";
import NoDairyRecipes from "./Customer/Recipes/NoDairyRecipes";
import SugarFreeRecipes from "./Customer/Recipes/SugarFreeRecipes";
import GlutenFreeRecipes from "./Customer/Recipes/GlutenFreeRecipes";
import VeganRecipes from "./Customer/Recipes/VeganRecipes";
import BoilingRecipes from "./Customer/Recipes/BoilingRecipes";
import StirFryingRecipes from "./Customer/Recipes/StirFryingRecipes";
import RoastingRecipes from "./Customer/Recipes/RoastingRecipes";
import SteamingRecipes from "./Customer/Recipes/SteamingRecipes";
import Navbar from "./Component/Navbar";
import News from "./Customer/News/News";
import Wishlist from "./Customer/Wishlist/Wishlist";
import CookingMethod from "./Customer/Recipes/CookingMethod/CookingMethod";
import Profile from "./Customer/Profile/Profile";
import ChangePassword from "./Customer/ChangePassword/ChangePassword"; // Import ChangePassword

function App() {
  const [showProfile, setShowProfile] = useState(false); // State để hiển thị Profile
  const [showChangePassword, setShowChangePassword] = useState(false); // State để hiển thị ChangePassword
  const location = useLocation(); // Lấy đường dẫn hiện tại

  // Kiểm tra xem đường dẫn hiện tại có phải là /Login hoặc /Signup không
  const hideNavbar =
    location.pathname === "/Login" || location.pathname === "/Signup";

  const handleProfileClose = () => {
    setShowProfile(false); // Đóng modal Profile
  };

  const handleChangePasswordClose = () => {
    setShowChangePassword(false); // Đóng modal ChangePassword
    setShowProfile(false); // Đảm bảo đóng modal Profile khi đóng ChangePassword
  };

  return (
    <div>
      {/* Nếu không phải là /Login hoặc /Signup thì hiển thị Navbar */}
      {!hideNavbar && <Navbar onProfileClick={() => setShowProfile(true)} />}

      {/* Hiển thị modal Profile */}
      {showProfile && !showChangePassword && (
        <Profile
          onClose={handleProfileClose}
          onChangePasswordClick={() => {
            setShowProfile(false); // Đóng modal Profile khi chuyển sang ChangePassword
            setShowChangePassword(true); // Mở modal ChangePassword
          }}
        />
      )}

      {/* Hiển thị modal ChangePassword */}
      {showChangePassword && (
        <ChangePassword onClose={handleChangePasswordClose} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/News" element={<News />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Profile" element={<Profile />} />

        {/* RECIPES PAGE */}
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipes/vietnam" element={<VietnamRecipes />} />
        <Route path="/Recipes/usa" element={<USARecipes />} />
        <Route path="/Recipes/japan" element={<JapanRecipes />} />
        <Route path="/Recipes/china" element={<ChinaRecipes />} />
        <Route path="/Recipes/nodairy" element={<NoDairyRecipes />} />
        <Route path="/Recipes/sugarfree" element={<SugarFreeRecipes />} />
        <Route path="/Recipes/glutenfree" element={<GlutenFreeRecipes />} />
        <Route path="/Recipes/vegan" element={<VeganRecipes />} />
        <Route path="/Recipes/boiling" element={<BoilingRecipes />} />
        <Route path="/Recipes/stirfrying" element={<StirFryingRecipes />} />
        <Route path="/Recipes/roasting" element={<RoastingRecipes />} />
        <Route path="/Recipes/steaming" element={<SteamingRecipes />} />

        {/* CookingMethod */}
        <Route path="/CookingMethod/:recipeId" element={<CookingMethod />} />
        {/* Opening */}
        <Route path="/Opening" element={<Opening />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
