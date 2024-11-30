import React from 'react';
import img1 from '../pages/foodpic.jpg';

const Homepage = () => (
  <div>
    <h2>Welcome to FoodParadise!!</h2>
    <h4>Indulge your taste buds and explore a world of irresistible recipes, food tips, and culinary inspiration. Whether you're a home chef or a foodie, there's something here for everyone. Let's create magic on your plate!</h4>
    <h5>We believe food is more than just nourishment—it's a way to connect, share, and create memories. Join us as we share our favorite recipes, cooking secrets, and food stories. Let’s make every meal an adventure!</h5>
    <div className="featured-cakes">
      {/* Placeholder for featured cakes */}
      <img src={img1} alt="cake" height="200" width="500"/>
    </div>
  </div>
);

export default Homepage;