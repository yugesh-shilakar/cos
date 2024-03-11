import Nav from "./Nav";
import "./noti.css";
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

export default function Notification({ cartItems }) {
  const itemsToDisplay = mainMenuItems.filter((item) =>
    cartItems.includes(item._id)
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
