import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import { fetchProducts } from "../rtk/slices/products-slice";
import React from "react";

function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container className="pt-5">
      <Row className="my-5">
        {products.map((product) => (
          <Col key={product.id} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{height: "300px"}} variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
