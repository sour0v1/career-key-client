import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './global/nav/Nav';
import Footer from './global/footer/Footer';

const Root = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;