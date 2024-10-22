import { useEffect, useState } from "react";
import { addToLs, getStoredCart } from "../../utilities/localStorage";
import Bottle from "../bottle/Bottle";
import StoredCart from "../storedCart/StoredCart";
import "./bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [purchaseCart, setPurchaseCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const getCartFromLs = getStoredCart();

      const savedCart = [];
      for (const id of getCartFromLs) {
        console.log(id);
        const bottle = bottles.find((bottle) => id === bottle.id);
        console.log(bottle);
        if (bottle) {
          savedCart.push(bottle);
        }
        setPurchaseCart(savedCart);
      }
    }
  }, [bottles]);

  const handlePurchase = (bottle) => {
    const newPurchaseCart = [...purchaseCart, bottle];
    setPurchaseCart(newPurchaseCart);

    addToLs(bottle.id);
  };

  return (
    <div>
      <h2>Our all bottles: {bottles.length}</h2>
      <StoredCart purchaseCart={purchaseCart}></StoredCart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            handlePurchase={handlePurchase}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
