import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

function Contain() {
  return (
    <div>
      <div><Main/></div>
      <div><Footer/></div>
    </div>
  );
}


export default Contain;
