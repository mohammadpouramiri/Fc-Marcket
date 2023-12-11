import React, { useEffect } from 'react'
import { Link,  useNavigate,  useParams } from 'react-router-dom'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ProductDetailAction } from "../../action/actionPrdductList/ActionProductList"

const Product = () => {

    const params = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const productDetail = useSelector(state => state.ProductDetail)

    const { loading , product } = productDetail

    useEffect(() => {
        dispatch(ProductDetailAction(params.id))
    } , [dispatch , params.id])

    const addToCart = () => {
        navigate(`/cart/${params.id}`)
    }

  return (
    <div>
        <Link to="/" className='btn btn-light'>
            بازگشت به صفحه اصلی    
        </Link>

        { loading ? <h3>در حال دریافت محصول ...</h3> : (
        <Row>
            <Col md={6}>
                <Image src={product.image} fluid rounded />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item as="h3">
                        {product.name}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Button
                            className='btn btn-block'
                            onClick={addToCart}
                        >
                          افزودن به سبد خرید  
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        ) }
    </div>
  )
}

export default Product