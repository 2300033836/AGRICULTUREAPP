
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
    { name: "Drumstick", image: "drumstick.jpg" },
    { name: "Potato", image: "potato.jpg" },
    { name: "Ladiesfinger", image: "ladiesfinger.jpg" },
    { name: "Mint", image: "mint.jpg"},
    { name: "Coriander", image: "Coriander.jpg"},
     { name: "IvyGourd", image: "ivygourd.jpg"},
 { name: "Onion", image: "onion.jpg"},
 { name: "Tomato", image: "tomatoes.jpg"},
 { name: "Sweetcorn", image: "sweetcorn.jpg"},
 { name: "SpringOnion", image: "SpringOnion.jpg"},
  { name: "Radish", image: "radish.jpg"},
   { name: "Capsicum", image: "capsicum.jpg"},




  ],
  Pulses: [
    { name: "Adukibeans", image: "adukibeans.jpg" },
    { name: "Chickpeas", image: "chickpeas.jpg" },
    { name: "Kidneybeans", image: "kidneybeans.jpg" },
    { name: "Soyabeans", image: "soyabeans.jpg" },
    { name: "Splitbengalgram", image: "splitbengalgram.jpg" },
  ],
  Fruits: [
    { name: "Apple", image: "apple.jpg" },
    { name: "Guava", image: "guava.jpg" },
    { name: "Papaya", image: "papaya.jpg" },
    { name: "Pomegranate", image: "pomegranate.jpg" },
    { name: "Mango", image: "mango.jpg" },
    { name: "Grapes", image: "grapes.jpg" },
    { name: "Watermelon", image: "watermelon.jpg" },
    { name: "Pineapple", image: "pineapple.jpg" },
    { name: "Orange", image: "orange.jpg" },
    { name: "Kiwi", image: "kiwi.jpg" },
    
    
  ],
};

const prices = {
  Fruits: {
    Apple: [
      "1Kg - Rupees 32",
      "250g - Rupees 12",
      "500g - Rupees 42",
      "3Kg - Rupees 96",
    ],
    Guava: [
      "1Kg - Rupees 32",
      "250g - Rupees 12",
      "500g - Rupees 42",
      "3Kg - Rupees 96",
    ],
    Papaya: [
      "1Kg - Rupees 32",
      "250g - Rupees 12",
      "500g - Rupees 42",
      "3Kg - Rupees 96",
    ],
    Pomegranate: [
      "1Kg - Rupees 32",
      "250g - Rupees 12",
      "500g - Rupees 42",
      "3Kg - Rupees 96",
    ],
    Mango: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Grapes: [
      "1Kg - Rupees 90",
      "250g - Rupees 30",
      "500g - Rupees 45",
      "3Kg - Rupees 270",
    ],
    Watermelon: [
      "1Kg - Rupees 90",
      "250g - Rupees 30",
      "500g - Rupees 45",
      "3Kg - Rupees 270",
    ],
    Pineapple: [
      "1Kg - Rupees 90",
      "250g - Rupees 30",
      "500g - Rupees 45",
      "3Kg - Rupees 270",
    ],
    Orange: [
      "1Kg - Rupees 90",
      "250g - Rupees 30",
      "500g - Rupees 45",
      "3Kg - Rupees 270",
    ],
    Kiwi: [
      "1Kg - Rupees 90",
      "250g - Rupees 30",
      "500g - Rupees 45",
      "3Kg - Rupees 270",
    ],
  

    
    
  },
  Vegetables: {
    Carrot: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Cauliflower: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Brinjal: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Drumstick: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Potato: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Ladiesfinger: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Mint: [
      "100g - Rupees 5",
      "50g - Rupees 7",
      
    ],
    Coriander: [
      "500g - Rupees 29",
      "250g - Rupees 12",
      "100g - Rupees 4",
      
    ],
    IvyGourd: [
      "1Kg - Rupees 19",
      "250g - Rupees 11",
      "500g - Rupees 15",
     
    ],
    Onion: [
      "1Kg - Rupees 52",
      "250g - Rupees 11",
      "500g - Rupees 20",
      "3Kg - Rupees 75",
    ],
    Tomato: [
      "1Kg - Rupees 24",
      "250g - Rupees 12",
      "500g - Rupees 9",
      "3Kg - Rupees 72",
    ],
    Sweetcorn: [
     
      "250g - Rupees 50",
      
    ],
    SpringOnion: [
      "1Kg - Rupees 80",
      "250g - Rupees 15",
      "500g - Rupees 35",
      
    ],
    Radish: [
      "1Kg - Rupees 25",
      "250g - Rupees 17",
      "500g - Rupees 33",
      
    ],
    Capsicum: [
      "1Kg - Rupees 38",
      "250g - Rupees 29",
      "500g - Rupees 36",
      "3Kg - Rupees 115",
    ],
    
  },
  Pulses: {
    Adukibeans: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Chickpeas: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Kidneybeans: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Soyabeans: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
    Splitbengalgram: [
      "1Kg - Rupees 200",
      "250g - Rupees 70",
      "500g - Rupees 100",
      "3Kg - Rupees 600",
    ],
  },
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
   const [signupMessage, setSignupMessage] = useState("");
const [showContact, setShowContact] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
const [aboutSelected, setAboutSelected] = useState(false);
const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);






  const addToCart = (product, weightPrice) => {
    setCart((prev) => [...prev, { ...product, weightPrice }]);
    setSuccessMessage("Item added successfully to the cart 😜");
    setTimeout(() => {
      setSuccessMessage("");
    }, 2500);
  };




const getSearchResults = () => {
  const results = [];
  for (const category in products) {
    for (const product of products[category]) {
      if (product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        results.push({ ...product, category });
      }
    }
  }
  return results;
};




const handleOpenLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleOpenSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

   const handleRegister = () => {
  // Example validation
  const email = document.querySelector("input[type='email']").value;
  if (email === "test@example.com") {
    setSignupMessage("Email already exists ❌");
  } else {
    setSignupMessage("User registered successfully ✅");
    setTimeout(() => {
      setShowSignup(false);
      setSignupMessage("");
    }, 2000);
  }
};






  return (
    <div className="app">
      <header className="header">
         
  <h1 className="logo">THE FARMER'S CHOICE🌱</h1>
  
  <input
  type="text"
  placeholder="Search for products..."
  className="search-bar"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>


  <nav>
    <a href="#">HOME</a>
  <a onClick={() => {
  setAboutSelected(true);
  setSelectedCategory(null);  // Close any open shop/category view
}}>ABOUT</a>

    <a onClick={() => setSelectedCategory("Shop")}>SHOP</a>
  <a href="#" onClick={(e) => { e.preventDefault(); togglePopup(); }}>SIGNIN</a>




  </nav>
</header>


      <marquee className="offer-banner">🌟 From Our Fields to Your Fork – All Veggies Half Price!

 🌟</marquee>

      {successMessage && <div className="success-message">{successMessage}</div>}


    
 
{aboutSelected && (
  <div className="about-section">
    <h2>About The Farmer’s Choice 🌱</h2>
    <p>
      The Farmer’s Choice 🌱 is a farmer-centric web application designed to bridge the gap between rural producers and urban consumers.
    </p>
    <p>
      It provides a digital marketplace where farmers can showcase their fresh produce directly to buyers.
    </p>
    <p>
      The platform removes middlemen, ensuring fair pricing for farmers and affordable products for consumers.
    </p>
    <p>
      With a user-friendly interface, real-time pricing, and category-based shopping, the platform empowers farmers with digital tools.
    </p>
    <p>
      Secure login, a multi-language translator, and direct buyer-farmer communication promote transparency and trust.
    </p>
    <p>
      Whether you're shopping for fresh vegetables, pulses, or fruits, this app simplifies the process.
    </p>
    <p>
      The platform also ensures authenticity by verifying farmer identities via Aadhar submission.
    </p>
    <p>
      Buyers enjoy a seamless experience with search, filtering, and cart functionalities.
    </p>
    <p>
      It's more than just a marketplace—it's a movement toward sustainable, local, and tech-enabled agriculture.
    </p>
    <p>
      Built using React, the app is mobile-responsive and ready to scale across regions.
    </p>
    <p>
      Farmers benefit from better reach while customers get access to healthy, chemical-free produce.
    </p>
    <p>
      The app supports both buyers and farmers through intuitive design and support features like Help and Contact.
    </p>
    <p>
      Join us in supporting Indian agriculture and making smarter food choices.
    </p>
    <p>
      From farm to fork—The Farmer’s Choice is your trusted green companion!
    </p>
    <button className="back-btn" onClick={() => setAboutSelected(false)}>⬅ Back</button>
  </div>
)}




<div className="App">
      <header className="header">
        <button onClick={handleOpenLogin} className="sign-in-button">Sign In</button>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>LOGIN</h2>
              <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            </div>
            <div className="modal-body">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <button className="btn">SIGN IN</button>
              <div className="forgot-container">
                <a href="#">Forgot password?</a>
              </div>
              <div className="signup-link">
                Don't have an account?{' '}
                <button className="link-button" onClick={handleOpenSignup}>
                  SIGNUP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create an account</h2>
              <span className="close" onClick={() => setShowSignup(false)}>&times;</span>
            </div>
            <div className="modal-body">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Role</label>
              <select>
                <option value="">Select a role</option>
                <option value="Admin">Admin</option>
                <option value="Farmer">Farmer</option>
                <option value="Buyer">Buyer</option>
              </select>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" />
              <button className="btn" onClick={handleRegister}> Register</button>
              {signupMessage && <p className="signup-message">{signupMessage}</p>}
              <div className="signin-link">
                Already have an account?{' '}
                <button className="link-button" onClick={handleOpenLogin}>
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  


 


{searchQuery.trim() !== "" ? (
  <div className="search-results">
    <h2>Search Results for "{searchQuery}"</h2>
    <div className="product-list">
      {getSearchResults().length > 0 ? (
        getSearchResults().map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <select className="product-dropdown" id={${product.name}-select}>
              {prices[product.category][product.name].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <button
              className="add-btn"
              onClick={() => {
                const select = document.getElementById(${product.name}-select);
                addToCart(product, select.value);
              }}
            >
              ADD
            </button>
          </div>
        ))
      ) : (
        <p>Sorry, it is not currently available</p>
      )}
    </div>
  </div>
) : !selectedCategory ? (
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
      <img src="ALL.jpg.png" alt="Farmer in the field" />
    </div>
    
  </div>


) : selectedCategory === "Shop" ? (
  <div className="categories">
    <h2>Shop by Category 🧺</h2>
    <div className="category-list">
      {categories.map((category) => (
        <div
          key={category.name}
          className="category-card"
          onClick={() => setSelectedCategory(category.name)}
        >
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
          <select className="product-dropdown" id={${product.name}-select}>
            {prices[selectedCategory][product.name].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <button
            className="add-btn"
            onClick={() => {
              const select = document.getElementById(${product.name}-select);
              addToCart(product, select.value);
            }}
          >
            ADD
          </button>
        </div>
      ))}
    </div>
  </div>
)}


      {showCart && (
        <div className="cart-modal">
          <h3>🛒 Cart Items</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>
                  {item.name} - {item.weightPrice}
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setShowCart(false)}>Close</button>
        </div>
      )}




      <footer className="footer">
        <img
          src="cart.jpg"
          alt="Cart"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        />
       <button className="footer-btn" onClick={() => setShowContact(!showContact)}>Contact Us</button>
{showContact && (
  <div className="contact-info">
    <p>📞 +91-9876543210</p>
    <p>📞 +91-9123456780</p>
  </div>
)}

        <button className="footer-btn">Help</button>
      </footer>
    </div>
  );
}

export default App;
