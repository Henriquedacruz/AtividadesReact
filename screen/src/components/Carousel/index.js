import React from 'react'
import { Carousel } from 'react-bootstrap'
import './style.css'

function index() {
  return (
    <Carousel className='caro'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images5.alphacoders.com/519/thumbbig-519651.webp"
      
    />
    <Carousel.Caption>
     Mais Vendidos
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images7.alphacoders.com/439/thumbbig-439636.webp"
      
    />

    <Carousel.Caption>
     Mais Vendidos
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.alphacoders.com/983/thumbbig-983650.webp"
      
    />

    <Carousel.Caption>
     Mais Vendidos
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default index