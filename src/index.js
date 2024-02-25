import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const totalPizzas = pizzaData.length;
const App = function () {
  return (
    <div className="container">
      <Header />
      {totalPizzas > 0 ? (
        <Menu />
      ) : (
        <h1>We are working on Our Menu. Please come Later</h1>
      )}
      <Footer />
    </div>
  );
};

const Header = function () {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  );
};

const Pizza = function ({ pizzaObj }) {
  console.log(pizzaObj);

  return (
    <li className={pizzaObj.soldOut ? `pizza sold-out` : `pizza`}>
      <img alt={pizzaObj.name} src={pizzaObj.photoName}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price * 270 + " PKR"}
        </span>
      </div>
    </li>
  );
};
const Menu = function () {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzaObj={pizza} key={pizza.name} />;
        })}
      </ul>
    </main>
  );
};
const Footer = function () {
  const hour = new Date().getHours();
  const openHours = 18;
  const closedHours = 2;
  let current;
  const today = new Date().toTimeString();
  if (hour >= openHours || hour <= closedHours) {
    current = true;
  }
  return (
    <footer className="footer">
      <div className="order">
        {current ? (
          <p>
            We are open until {closedHours}:00 AM. Come visit us or Order
            online.
            {today}
          </p>
        ) : (
          <p>
            We are closed until {openHours}:00 PM. {today}
          </p>
        )}
        <button className="btn">Order Now</button>
      </div>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
