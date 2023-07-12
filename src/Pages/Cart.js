import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../Components/CartCard/CartCard";
import { Button } from "react-bootstrap";
import { updateQuantity, removeFromCart } from "../Redux/Reducers/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleQuantity = (id, type) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      let newQuantity = item.quantity;
      if (type === "decrement") {
        newQuantity -= 1;
      } else if (type === "increment") {
        newQuantity += 1;
      }

      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cartPage">
      <div id="cart-page-container" className="container">
        <div className="container-fluid">
          <div className="row">
            {cart &&
              cart.map((d, i) => (
                <div className="col-12" key={`cart-card-${i}`}>
                  <CartCard data={d} handleAdd={handleQuantity} handleRemove={handleRemove} />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="py-5 footer">
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className="m-0 text-white">SUB TOTAL :</p>
            <p className="m-0 text-white">$ {totalPrice.toFixed(2)}</p>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <p className="m-0 text-white">SHIPPING :</p>
            <p className="m-0 text-white">FREE</p>
          </div>
          <hr style={{ color: "white" }} />
          <div className="d-flex justify-content-between mt-2">
            <p className="m-0 text-white">TOTAL :</p>
            <p className="m-0 text-white">$ {totalPrice.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-end mt-2">
            <p className="m-0  text-danger">Get Daily Cash with Nespola Card</p>
          </div>
          <div className="d-flex justify-content-end mt-2">
            <Button variant="outline-success">
              <img
                src="https://e7.pngegg.com/pngimages/494/693/png-clipart-logo-shopping-list-design-product-shopping-list-purple-angle-thumbnail.png"
                alt="cart"
                style={{ height: 25, width: 25, borderRadius: 50 }}
                className="me-1"
              ></img>
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
