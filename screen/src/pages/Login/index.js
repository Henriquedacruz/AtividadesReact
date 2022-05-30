import React from 'react'
import Header from '../../components/Header';
import Login from '../../components/Login/login';
import Navbar from '../../components/Footer/index';
import Img from '../../components/imagens/index'
import '../../pages/Login/style.css'



function index(props)  {
  return (
   <>
   
   <Header />
   <Img />
   <Login />
   <Navbar />
   
   </>
  ) 
}

export default index

