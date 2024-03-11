import Nav from "./Nav";
import { useState, useEffect } from "react";
// const mainMenuItems = [
//   {
//     id: 3,
//     url: "fried-chicken.svg",
//     title: "Fried Chicken",
//     time: "23",
//     ratings: "4.6",
//     price: "141",
//   },
//   {
//     id: 8,
//     url: "cookie.svg",
//     title: "Cookie",
//     time: "21",
//     ratings: "4.7",
//     price: "181",
//   },
// ];
const specialItems = [
  {
    id: 9,
    url: "pizza.svg",
    title: "Cookie",
    time: "21",
    ratings: "4.7",
    price: "181",
  },
  {
    id: 10,
    url: "cheeseburger.svg",
    title: "Cheese Burger",
    time: "15",
    ratings: "4.2",
    price: "145",
  },
];
function Home({ cartItems, setCartItems }) {
  return (
    <>
      <Head />
      <MainMenu cartItems={cartItems} setCartItems={setCartItems} />
      <Specials cartItems={cartItems} setCartItems={setCartItems} />
      <Nav />
    </>
  );
}
function Head() {
  return (
    <>
      <header>
        <img src="img/logo.png" alt="logo" width="150px" />
        <i className="fa-solid fa-user fa-2xl" style={{ color: "#53006f" }} />
      </header>
      <div id="welcome-msg">
        <h1>Hello Rabindra!</h1>
      </div>
    </>
  );
}
function MainMenu({ cartItems, setCartItems }) {
  // const [mainMenuItems,setMainMenuItems] = useState([])
  const [mainMenuItems, setMainMenuItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("http://localhost:1234/items");
        if (response.ok) {
          const data = await response.json();
          console.log(data.data.items);
          setMainMenuItems(data.data.items);
        } else {
          console.error("Failed to fetch items:", response.statusText);
          // Handle failure to fetch items
        }
      } catch (error) {
        console.error("Failed to fetch items:", error);
        // Handle failure to fetch items
      }
    }

    fetchItems();
  }, []);

  return (
    <main>
      <h2>Aja ko Menu</h2>
      <div className="menu-items">
        {mainMenuItems.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </main>
  );
}

function Specials({ cartItems, setCartItems }) {
  return (
    <div id="specials">
      <h2>All Time Specials</h2>
      <div className="menu-items">
        {specialItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}
function MenuItem({ item, cartItems, setCartItems }) {
  const { _id, url, title, time, ratings, price } = item;
  const id = _id;
  function handleAdd(e) {
    e.preventDefault();
    console.log("Logging menuitem", id, item);
    setCartItems([...cartItems, id]);
    console.log(cartItems);
  }

  return (
    <div class="menu-item">
      <div class="item-image">
        <img className="food-icon" src={`img/SVG/${url}`} alt={title} />
      </div>
      <div class="item-details">
        <div class="item-title">{title}</div>
        <div class="item-extra">
          <p class="item-eta">{time}min</p>
          <p class="dot-separator">&#8226;</p>
          <p class="item-rating">
            <i class="fa-solid fa-star"></i>
            <span>{ratings}</span>
          </p>
        </div>
      </div>

      <div class="item-bottom">
        <div class="item-price">Rs.{price}.00</div>
        <div class="add-cart">
          <a href="#" onClick={handleAdd}>
            <i class="fa-solid fa-cart-plus fa-sm"></i>
          </a>
        </div>
      </div>
    </div>
    // <div className="menu-item">
    //   <img className="food-icon" src={`img/SVG/${url}`} alt={title} />
    //   <h4>{title}</h4>
    //   <span>
    //     {time} mins
    //     <i className="fa-solid fa-star" style={{ color: "#55105f" }} />
    //     {ratings}
    //   </span>
    //   <h3>
    //     Rs.{price}
    //     <i
    //       className="fa-solid fa-cart-plus fa-sm"
    //       style={{ color: "#55105f" }}
    //     />
    //   </h3>
    // </div>
  );
}

export default Home;
