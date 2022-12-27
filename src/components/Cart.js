import { Button, Container, Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  console.log(cart);
  return (
    <Container className="pt-5 mt-5">
      <h1>Welcome to cart</h1>
      <Button variant="primary" className="mb-4" onClick={() => dispatch(clear())}>Clear Cart</Button>
      <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td><Image src={product.image} alt={product.title} style={{width: "100px", height: "100px"}} /></td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => dispatch(deleteFromCart(product))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default Cart;
