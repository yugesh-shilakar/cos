import Nav from "./Nav";
import "./noti.css";
const mainMenuItems = [
  {
    id: 3,
    url: "fried-chicken.svg",
    title: "Fried Chicken",
    time: "23",
    ratings: "4.6",
    price: 141,
  },
  {
    id: 4,
    url: "lemon.svg",
    title: "Lemon",
    time: "20",
    ratings: "4.5",
    price: 227,
  },
  {
    id: 5,
    url: "popcorn.svg",
    title: "Popcorn",
    time: "19",
    ratings: "4.9",
    price: 284,
  },
  {
    id: 6,
    url: "vanilla-cupcake.svg",
    title: "Vanilla Cupcake",
    time: "29",
    ratings: "4.1",
    price: 168,
  },
  {
    id: 7,
    url: "bread-egg.svg",
    title: "Bread Egg",
    time: "10",
    ratings: "4.8",
    price: 238,
  },
  {
    id: 8,
    url: "cookie.svg",
    title: "Cookie",
    time: "21",
    ratings: "4.7",
    price: 181,
  },

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
export default function Notification({ cartItems }) {
  const itemsToDisplay = mainMenuItems.filter((item) =>
    cartItems.includes(parseInt(item.id))
  );
  console.log("This is " + itemsToDisplay);
  let finaltotal = 0; // Initialize total price variable

  itemsToDisplay.forEach((item) => {
    finaltotal += parseInt(item.time);
  });
  return (
    <>
      <h1 className="heading">Notifications</h1>
      <div className="notifications">
        <div className="noti">
          <div className="noti-info">
            <div className="smiley">
              <img src="./img/icons/smiley.png" alt="smiley" />
            </div>
            <p className="noti-text">
              Your order will be ready in {finaltotal} mins!
            </p>
            {/* <div className="noti-time">3:10 PM</div> */}
          </div>
        </div>
        <div className="noti-no">{/* <h2>No Notifications</h2> */}</div>
      </div>
      <Nav />
    </>
  );
}
