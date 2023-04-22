import { Box, Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { removeAll } from "../app/productsSlice";
import { emptyCart } from "../app/badgeSlice";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartItems = () => {
  const products = useSelector((state: RootState) => state.products.value);
  const dispatch = useDispatch();
  const totalCartPrice = useSelector(
    (state: RootState) => state.products.totalCartPrice
  );

  const remove = () => {
    dispatch(removeAll());
    dispatch(emptyCart());
  };

  return (
    <Stack
      direction={{ md: "row" }}
      marginBottom={2}
      justifyContent="center"
      alignItems="center"
    >
      <Stack padding="1rem" justifyContent="center" alignItems="center">
        {!products.length && (
          <Typography marginTop={12} variant="h3">
            There are no items in your cart.
          </Typography>
        )}
        {products &&
          products?.map((prod) => (
            <CartItem
              key={prod.id}
              price={prod.price}
              title={prod.title}
              description={prod.description}
              category={prod.category}
              image={prod.image}
              id={prod.id}
              quantity={prod.quantity}
              totalPrice={prod.totalPrice}
            />
          ))}
      </Stack>
      {totalCartPrice > 1 && (
        <Stack
          marginX="auto"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Typography variant="h6">
            Total Price: ${totalCartPrice.toFixed(2)}
          </Typography>

          <Link className="link" to="/checkout">
            <Button variant="contained" fullWidth={true} onClick={remove}>
              buy now
            </Button>
          </Link>
        </Stack>
      )}
    </Stack>
  );
};

export default CartItems;
