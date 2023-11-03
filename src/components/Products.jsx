import React, { useContext } from "react";
import Product from "./Product";
import styled from "styled-components";
import jsonData from "../data.json";
import { datacontext } from "../App";

const Styleddiv = styled.div`
  display: grid;
  grid-template-rows: repeat(4, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  width: 95%;
  margin: 1rem auto;
`;

const Products = () => {
  const [datajson] = useContext(datacontext);
  return (
    <>
      <Styleddiv>
        {datajson.map((item, key) => {
          return <Product item={item} key={key} />;
        })}
      </Styleddiv>
    </>
  );
};

export default Products;
