import { createContext, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Products from './components/Products';
import styled from 'styled-components';
import jsonData from "./data.json";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-top: 1rem;
  border-right: 1px solid black;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto; 
  }
`;


export const datacontext = createContext();
function App() {
  const [datajson, setdatajson] = useState(jsonData)
  return (
    <>
      <datacontext.Provider value={[datajson, setdatajson]}>
        <Navbar />
        <StyledDiv>
          <Filter />
          <Products />
        </StyledDiv>
      </datacontext.Provider>
    </>
  );
}

export default App;
