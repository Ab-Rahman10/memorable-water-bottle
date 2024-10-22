/* eslint-disable react/prop-types */
import "./storedCart.css";

const StoredCart = ({ purchaseCart }) => {
  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Cart: {purchaseCart.length}</h3>
      <div className="storedCart-container">
        {purchaseCart.map((cart) => (
          <>
            <div className="cart">
              <img key={cart.id} src={cart.img} />
              <button>Remove</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default StoredCart;
