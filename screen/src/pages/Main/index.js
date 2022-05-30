import React from 'react'
import Carousel from '../../components/Carousel';
import CardGroup from '../../components/Card';
import Header from '../../components/Header';
import './style.css';


function index(props)  {
  return (
    <div className='container'>
    <> 
      <Header />
      <Carousel />
      <CardGroup />
      <CardGroup />
      <CardGroup />
    </>
    </div>
  ) 
}

export default index

