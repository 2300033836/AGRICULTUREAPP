import React, { useState } from "react";
import "./App.css";

const categories = [
  { name: "Vegetables", image: "vegetables.jpg" },
  { name: "Pulses", image: "pulses.jpg" },
  { name: "Fruits", image: "fruits.jpg" },
];

const products = {
  Vegetables: [
    { name: "Carrot", image: "carrot.jpg" },
    { name: "Cauliflower", image: "cauliflower.jpg" },
    { name: "Brinjal", image: "brinjal.jpg" },
  ],
  Pulses: [
 
    { name: "Chickpeas", image: "chickpeas.jpg" },
    { name: "Aduki Beans", image: "Adukibeans.jpg" },
    { name: "Soyabeans", image: "soyabeans.jpg" },
    { name: "Splitbengalgram", image: "splitbengalgram.jpg" },
  ],
  Fruits: [
    { name: "Apple", image: "apple.jpg" },
    { name: "Guava", image: "guava.jpg" },
    { name: "Papaya", image: "papaya.jpg" },
    { name: "Pomegranate", image: "pomegranate.jpg" },
    { name: "Mango", image: "mango.jpg" },
  ],
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">THE FARMER'S CHOICE</h1>
        <nav>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a onClick={() => setSelectedCategory("Shop")}>SHOP</a>
          <a href="#">SIGNUP</a>
        </nav>
      </header>

      {/* Main Section */}
      {!selectedCategory ? (
        <div className="home">
          <div className="home-content">
            <h2 className="title">Farmer Friendly Web App</h2>
            <p className="subtitle">
              Bridging the gap between farmers and buyers—no middlemen, just fresh and fair deals!
            </p>
            <button className="order-btn" onClick={() => setSelectedCategory("Shop")}>
              Order Now
            </button>
          </div>
          <div className="home-image">
            <img src="farming1.jpg" alt="Farmer in the field" />
          </div>
        </div>
      ) : selectedCategory === "Shop" ? (
        <div className="categories">
          <h2>Select a Category</h2>
          <div className="category-list">
            {categories.map((category) => (
              <div key={category.name} className="category-card" onClick={() => setSelectedCategory(category.name)}>
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
                
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="products">
          <button className="back-btn" onClick={() => setSelectedCategory("Shop")}>
            ⬅ Back
          </button>
          <h2>{selectedCategory}</h2>
          <div className="product-list">
            {products[selectedCategory].map((product) => (
              <div key={product.name} className="product-card">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>

                {/* Special section for Apple */}
                {selectedCategory === "Fruits" && product.name === "Apple" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
                 {selectedCategory === "Fruits" && product.name === "Guava" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
                {selectedCategory === "Fruits" && product.name === "Papaya" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
                {selectedCategory === "Fruits" && product.name === "Pomegranate" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
                {selectedCategory === "Fruits" && product.name === "Mango" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
                {selectedCategory === "Vegetables" && product.name === "Carrot" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
                {selectedCategory === "Vegetables" && product.name === "Cauliflower" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                  
                )}
                {selectedCategory === "Vegetables" && product.name === "Brinjal" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
               
                 {selectedCategory === "Pulses" && product.name === "Chickpeas" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                )}
                {selectedCategory === "Pulses" && product.name === "Soyabeans" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                  
                )}
                
                {selectedCategory === "Pulses" && product.name === "Aduki Beans" && (
                  <>
                    <select className="product-dropdown">
                      <option>1Kg - Rupees 32</option>
                      <option>250g - Rupees 12</option>
                      <option>500g - Rupees 42</option>
                      <option>3Kg - Rupees 96</option>
                    </select>
                    <button className="add-btn">ADD</button>
                  </>
                  
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <button className="footer-btn">Contact Us</button>
        <button className="footer-btn">Help</button>
      </footer>
    </div>
  );
}

export default App;