import React from "react";
import styled from "styled-components";
// import img from "../img.webp";
import jsonData from "../data.json";

const Styleddivprod = styled.div`
  display: flex;
  gap: 20px;
  background-color: #dfdfdf;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Styledimg = styled.img`
  width: 20vw;
`;

const Product = ({ item }) => {
  return (
    <>
      <Styleddivprod>
        <div>
          <Styledimg src={item.img} alt="" />
        </div>
        <div>
          <h1>{item.Productname}</h1>
          &nbsp;
          <h4>{item.Brand}</h4>
          &nbsp;
          <p>{item.desc}</p>
          &nbsp;
          <h2>₹{item.price}</h2>
        </div>
      </Styleddivprod>
    </>
  );
};

export default Product;
