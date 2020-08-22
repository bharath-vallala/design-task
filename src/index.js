import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from "./NavBar"
import ShowCase from "./ShowCase"
import CompanyShow from "./CompanyShow"
import SubList from "./SubList"

ReactDOM.render(
    <StrictMode>

      <NavBar></NavBar>
      <ShowCase></ShowCase>
      <CompanyShow></CompanyShow>
      <SubList></SubList>
      </StrictMode>,
  document.getElementById('root')
);

