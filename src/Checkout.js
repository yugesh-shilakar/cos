import { useEffect, useState } from "react";
import Nav from "./Nav";
import "./checkout.css";
import { Link } from "react-router-dom";

const mainMenuItems = [
  {
    _id: "65eacd8aa7f7c27fd54015d6",
    url: "fried-chicken.svg",
    title: "Fried Chicken",
    time: "23",
    ratings: 4.6,
    price: 141,
    isSpecial: false,
  },
  {
    _id: "65eacd8aa7f7c27fd54015d7",
    url: "lemon.svg",
    title: "Lemon",
    time: "20",
    ratings: 4.5,
    price: 227,
    isSpecial: false,
  },
  {
    _id: "65eacd8aa7f7c27fd54015d8",
    url: "popcorn.svg",
    title: "Popcorn",
    time: "19",
    ratings: 4.9,
    price: 284,
    isSpecial: false,
  },
  {
    _id: "65eacd8aa7f7c27fd54015d9",
    url: "vanilla-cupcake.svg",
    title: "Vanilla Cupcake",
    time: "29",
    ratings: 4.1,
    price: 168,
    isSpecial: false,
  },
  {
    _id: "65eacd8aa7f7c27fd54015da",
    url: "bread-egg.svg",
    title: "Bread Egg",
    time: "10",
    ratings: 4.8,
    price: 238,
    isSpecial: false,
  },
  {
    _id: "65eacd8aa7f7c27fd54015db",
    url: "cookie.svg",
    title: "Cookie",
    time: "21",
    ratings: 4.7,
    price: 181,
    isSpecial: false,
  },
  {
    _id: "65eacd8aa7f7c27fd54015dc",
    url: "pizza.svg",
    title: "Cookie",
    time: "21",
    ratings: 4.7,
    price: 181,
    isSpecial: true,
  },
  {
    _id: "65eacd8aa7f7c27fd54015dd",
    url: "cheeseburger.svg",
    title: "Cheese Burger",
    time: "15",
    ratings: 4.2,
    price: 145,
    isSpecial: true,
  },
  {
    _id: "65eaceb1f0aa713b9c3ee2fa",
    url: "test.svg",
    title: "Test",
    time: "12",
    ratings: 4,
    price: 140,
    isSpecial: false,
  },
  {
    _id: "65ee629ed3ae0f5229a0884c",
    url: "demo.svg",
    title: "Meaty Rice",
    time: "30",
    ratings: 4,
    price: 300,
    isSpecial: false,
  },
];

export default function Checkout({ cartItems }) {
  const [total, setTotal] = useState(0);
  const itemsToDisplay = mainMenuItems.filter((item) => {
    return cartItems.includes(item._id);
  });
  // console.log("This is " + itemsToDisplay);
  let finaltotal = 0; // Initialize total price variable

  itemsToDisplay.forEach((item) => {
    finaltotal += parseInt(item.price);
  });

  useEffect(() => {
    // Set the total state once when the component mounts
    setTotal(finaltotal);
  }, [finaltotal]);

  useEffect(() => {
    // Set the total state once when the component mounts
    setTotal(total);
  }, [total]);
  // setTotal(() => finaltotal);

  return (
    <div>
      <>
        <div className="main">
          <h1 className="heading">Your Order</h1>
          <section className="orders">
            {/* {mainMenuItems.filter((item) => cartItems.includes(item.id))} */}
            {itemsToDisplay.map((item) => (
              <Order
                key={item.id}
                item={item}
                total={total}
                setTotal={setTotal}
              />
            ))}
          </section>
        </div>
        <section className="payment">
          <h2 className="sub-heading">Pay With</h2>
          <div className="payment-methods">
            <a href="#">
              <img src="./img/icons/esewa.png" alt="esewa" />
            </a>
            <a href="#">
              <img src="./img/icons/ime.png" alt="imepay" />
            </a>
            <a href="#">
              <img src="./img/icons/khalti.png" alt="khalti" />
            </a>
          </div>
          <div className="payment-details">
            <h3>Payment Details</h3>
            {/* <div className="payment-before">
              <div className="payment-info">
                <div className="payment-title">Subtotal</div>
                <div className="payment-price">Rs. 50.00</div>
              </div>
              <div className="payment-info">
                <div className="payment-title">Service Charge</div>
                <div className="payment-price">Rs. 10.00</div>
              </div>
            </div> */}
            <div className="payment-total">
              <div className="payment-title">Total</div>
              <div className="payment-price">Rs. {finaltotal}.00</div>
            </div>
            <Link to="/notification">
              <div className="btn">PAY</div>
            </Link>
          </div>
        </section>
      </>

      <Nav />
    </div>
  );
}

function Order({ item, total, setTotal }) {
  // const { id, url, title, time, ratings, price } = item;
  function delTotal() {
    console.log("hi");
    setTotal((total) => total - item.price);
    console.log(total);
  }
  function addTotal() {
    setTotal((total) => total + item.price);
  }
  return (
    <div className="order">
      <div className="order-info">
        <div>
          <div className="order-img">
            <img src={`./img/SVG/${item.url}`} alt="smiley" />
          </div>
          <div className="order-desc">
            <span className="order-title">{item.title}</span>
            <span className="order-cost">Rs. {item.price}.00</span>
          </div>
        </div>
        <div className="order-counter">
          <a href="#" onClick={delTotal}>
            <i className="fa-solid fa-minus bg-icon bg-icon-minus" />
          </a>
          <p className="order-count"></p>
          <a href="#" onClick={addTotal}>
            <i
              className="fa-solid fa-plus bg-icon bg-icon-plus"
              onClick={addTotal}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
