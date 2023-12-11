import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddToCart , RemoveFromCart } from '../../action/cartAction/CartAction'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'

const Cart = () => {

  const params = useParams()

  const productId = params.id

  const dispatch = useDispatch()

  const CartItems = useSelector(state => state.cart)

  const { cartItems } = CartItems

  useEffect(() => {
    if(productId){
      dispatch(AddToCart(productId))
    }
  } , [dispatch , productId])

  const removeFromCartHandler = (id) => {
    dispatch(RemoveFromCart(id))
  }

  return (
    <div>
         <Row>
          <Col md={8}>
            <h3>سبد خرید</h3>
            {cartItems.length === 0 ? <p>سبد خرید خالی است</p> : 
              (
                <ListGroup variant='flush'>
                  {
                    cartItems.map(item => (
                      <ListGroup.Item key={item.id}>
                        <Row>
                          <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded />
                          </Col>
                          <Col md={3}>
                            {item.name}
                          </Col>
                          <Col md={2}>
                            {item.price}
                          </Col>
                          <Col md={2}>
                            <Button
                              type="button"
                              variant="light"
                              onClick={() => removeFromCartHandler(item.id)}
                            >
                              <i className='fa fa-trash'>

                              </i>
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
              )
            }
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  مجموع : {cartItems.reduce((acc , item) => acc + item.price , 0)}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
         </Row>
    </div>
  )
}

export default Cart