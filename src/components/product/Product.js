import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} />
        </Link>
        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              {product.name}
            </Card.Title>
        </Link>
        </Card.Body>
        <Card.Text as="h3">
          {product.description}
        </Card.Text>
      </Card>
    </div>
  )
}

export default Product