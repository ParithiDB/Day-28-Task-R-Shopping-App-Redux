import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../Redux/Reducers/cartSlice";
import { Carousel } from "react-bootstrap";

export default function CartCard({ data = {} }) {
  const dispatch = useDispatch();

  let price = (+data.quantity * +data.price).toFixed(2);

  const handleDecrement = () => {
    dispatch(updateQuantity({ id: data.id, quantity: data.quantity - 1 }));
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: data.id, quantity: data.quantity + 1 }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(data.id));
  };

  return (
    <div className="container">
      <div className="card mt-5 p-2">
        <div className="row">
          <div className="col-4">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  height={250}
                  className="d-block w-100 h-100 pic"
                  src={data.thumbnail}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={250}
                  className="d-block w-100 h-100 pic"
                  src={data.images[2]}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={250}
                  className="d-block w-100 h-100 pic"
                  src={data.images[1]}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-4 mt-5">
            <h5 className="d-flex text-align-left">{data.title}</h5>

            <h5 className="d-flex text-align-left">
              $ {data.price}.00/- <span className="ms-1"> per unit</span>
            </h5>
            <h6 className="d-flex text-align-left">
              Discount : {data.discountPercentage}% off
            </h6>

            <div>
              <h1 className="mt-4">Total :$ {price}</h1>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <Button
              variant="outline-danger mt-3"
              onClick={handleDecrement}
              disabled={data.quantity === 1}
            >
              -
            </Button>
            <h3 className="ms-1 me-1">{data.quantity}</h3>
            <Button variant="outline-success mt-3 me-5" onClick={handleIncrement}>
              +
            </Button>
            <Button variant="outline-danger mt-3" onClick={handleRemove}>
              Remove from Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
