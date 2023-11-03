import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { datacontext } from "../App";
import jsonData from "../data.json";

const Styleddiv = styled.div`
  border-right: 2px solid #000;
`;
const Styledtitle = styled.div`
  font-size: ${(props) => (props.small ? "2vw" : "3vw")};
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Styledinput = styled.input`
  display: block;
  width: 85%;
  height: 2rem;
  margin: 1rem auto;
  font-size: 1.5vw;
  border-radius: 5px;
`;
const Styleddropdown = styled.select`
  display: block;
  width: 85%;
  height: 2rem;
  margin: 1rem auto;
  font-size: 1.5vw;
  border-radius: 5px;
`;
const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Filter = () => {
  const [val, setval] = useState("All");
  const [datajson, setdatajson] = useContext(datacontext);
  const [val2, setval2] = useState("Any");
  const [val3, setval3] = useState(undefined);
  const [searchval, setsearchval] = useState(null);

  const setoption2 = (e) => {
    setval2(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "Any") {
      if (val !== "All") {
        setdatajson(
          jsonData.filter(
            (item) => item.Brand === val && item.desc === e.target.value
          )
        );
      } else {
        setdatajson(jsonData.filter((item) => item.desc === e.target.value));
      }
    } else {
      if (val !== "All") {
        setdatajson(jsonData.filter((item) => item.Brand === val));
      } else {
        setdatajson(jsonData);
      }
    }
  };

  const setoption = (e) => {
    setval(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "All") {
      if (val2 !== "Any") {
        setdatajson(
          jsonData.filter(
            (item) => item.Brand === e.target.value && item.desc === val2
          )
        );
      } else {
        setdatajson(jsonData.filter((item) => item.Brand === e.target.value));
      }
    } else {
      if (val2 !== "Any") {
        setdatajson(jsonData.filter((item) => item.desc === val2));
      } else {
        setdatajson(jsonData);
      }
    }
  };

  const setoption3 = (e) => {
    setval3(e.target.value);

    if (e.target.value === "Ascending Price") {
      setdatajson(datajson.slice().sort((a, b) => a.price - b.price));
    }
    if (e.target.value === "Descending Price") {
      setdatajson(datajson.slice().sort((a, b) => b.price - a.price));
    }
  };

  const filtersearch = (event) => {
    setsearchval(event.target.value);
    setdatajson(
      jsonData.filter((item) =>
        item.Productname.toLowerCase().includes(
          event.target.value.toLowerCase()
        )
      )
    );
  };

  return (
    <>
      <Styleddiv>
        <Styledtitle>Filters</Styledtitle>
        <StyledFlex>
          <Styledinput
            type="search"
            placeholder="Search"
            value={searchval}
            onChange={filtersearch}
          />
          <Styledtitle small>Brand</Styledtitle>
          <Styleddropdown value={val} onChange={setoption}>
            <option value="All">All</option>
            <option value="Apple">Apple</option>
            <option value="Poco">Poco</option>
            <option value="Redimi">Redimi</option>
            <option value="Samsumg">Samsumg</option>
            <option value="Vivo">Vivo</option>
          </Styleddropdown>
          <Styledtitle small>Sort By</Styledtitle>
          <Styleddropdown value={val3} onChange={setoption3}>
            <option value={0}>No Sorting</option>
            <option value="Ascending Price">Ascending Price</option>
            <option value="Descending Price">Descending Price</option>
          </Styleddropdown>
          <Styledtitle small>RAM size</Styledtitle>
          <Styleddropdown value={val2} onChange={setoption2}>
            <option value="Any">Any</option>
            <option value="RAM 4GB">4 GB</option>
            <option value="RAM 6GB">6 GB</option>
            <option value="RAM 8GB">8 GB</option>
          </Styleddropdown>
        </StyledFlex>
      </Styleddiv>
    </>
  );
};

export default Filter;
