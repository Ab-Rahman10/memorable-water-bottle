/* eslint-disable react/prop-types */

import "./bottle.css";
const Bottle = ({ bottle, handlePurchase }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>{name}</h3>
      <img src={img} />
      <p>${price}</p>
      <button onClick={() => handlePurchase(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
