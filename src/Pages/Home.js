import React, { useEffect, useState } from "react";
import Product from "../Components/Product/Product";
import FluidImage from "../Components/Images/Image";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducers/cartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://remarkable-platypus-5f6f00.netlify.app/Mocks/product.json')
      .then((response) => response.json())
      .then((result) => {
        if (result && result.products) {
          setItems(result.products);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="head">
        <FluidImage ImageURL="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg" />
      </div>

      <div>
        {items &&
          items.map((d, i) => (
            <Product key={`product-key-${i}`} data={d} handleAdd={handleAddToCart} />
          ))}
      </div>
    </>
  );
}
