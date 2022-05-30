import React from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import './login.css'

function login() {
  return (
   <div className='contanier'>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className='text'>Email address</Form.Label>
      <Form.Control className='input' type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
     </Form.Group>
  
     <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='text'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check className='text' type="checkbox" label="Check me out" />
     </Form.Group>
     <Button variant="primary" type="submit">
      Submit
     </Button>
     </Form>
   </div>
  )
}

export default login