import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../../components/product/Product'
import { useEffect } from 'react'
import { useDispatch , useSelector } from "react-redux"
import { ProductListAction } from '../../action/actionPrdductList/ActionProductList'

const Home = () => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.ProductList)

  const { loading , products } = productList 
  
  useEffect(() => {
    dispatch(ProductListAction())
  } , [dispatch])

  return (
    <div>
      <h1>
        محصولات
      </h1>
      { loading ? <h3>در حال دریافت اطلاعات ...</h3> : (
      <Row>
        {
            products.map(item => {
                return(
                    <Col key={item._id} sm={12} md={6} lg={4}>
                        <Product product={item} />
                    </Col>
                )
            })
        }
      </Row>
      ) }
    </div>
  )
}

export default Home
